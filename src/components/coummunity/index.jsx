import styled from '@emotion/styled';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Coummunity = ({ Data }) => {
	const [comment, setComment] = useState('');
	const params = new useParams();

	const onSubmit = async () => {
		console.log('clicked');
		try {
			await axios
				.post(
					`https://back.highthon10.kro.kr/community/${params.id}`,
					{
						content: comment,
					},
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				)
				.then(() => {
					window.location.reload();
				});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Coummunity_Container>
			<Coummunity_Title
				placeholder='댓글을 작성하세요.'
				onChange={(e) => {
					setComment(e.currentTarget.value);
				}}
			/>
			<Coummunity_ButtonLayout
				onClick={() => {
					onSubmit();
				}}
			>
				<Coummunity_Button>댓글 작성</Coummunity_Button>
			</Coummunity_ButtonLayout>

			<Coummunity_Contents>
				{Data.map((item) => {
					return (
						<Coummunity_Content key={item?.noticeId}>
							<Content_Info>
								<Content_Name>{item?.authorName}</Content_Name>
								{item?.type === 'CREATOR' ? (
									<Content_Tag_Seller>판매자</Content_Tag_Seller>
								) : (
									''
								)}
								{item?.type === 'SUPPORTER' ? (
									<Content_Tag_Buyer>구매자</Content_Tag_Buyer>
								) : (
									''
								)}
							</Content_Info>

							<Content_Date>{item?.createTime}</Content_Date>

							<Content_Title>{item?.content}</Content_Title>

							<Content_Provider />
						</Coummunity_Content>
					);
				})}
			</Coummunity_Contents>
		</Coummunity_Container>
	);
};

Coummunity.propTypes = {
	Data: PropTypes.node.isRequired,
};

const Coummunity_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 35px;
`;

const Coummunity_Title = styled.textarea`
width: 100%;
height: 100px;
border: 1px solid #494B4D;
outline: none;
border-radius: 5px;
padding: 12px 15px;
resize: vertical;
margin-bottom: 16px;
`;

const Coummunity_ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Coummunity_Button = styled.button`
  border: none;
  background-color: #AA60C8;
  width: 133px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border-radius: 10px;
`;

const Coummunity_Contents = styled.div`

`;

const Coummunity_Content = styled.div`

`;

const Content_Info = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

const Content_Name = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Content_Tag_Seller = styled.div`
  width: 35px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8859F8;
  font-size: 8px;
  font-weight: 200;
  color: white;
  border-radius: 5px;
`;

const Content_Tag_Buyer = styled.div`
  width: 35px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C974EC;
  font-size: 8px;
  font-weight: 200;
  color: white;
  border-radius: 5px;
`;

const Content_Date = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 16px;
`;

const Content_Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 300;
`;

const Content_Provider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #EBEBEB;
  margin-top: 42px;
  margin-bottom: 24px;
`;

export default Coummunity;
