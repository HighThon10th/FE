import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Announcement = ({ Data }) => {
	return (
		<Announcement_Container>
			<Announcement_Title placeholder='제목을 작성하세요.' />
			<Announcement_SubTitle placeholder='댓글을 작성하세요.' />
			<Announcement_ButtonLayout>
				<Announcement_Button>공지 작성</Announcement_Button>
			</Announcement_ButtonLayout>

			<Announcement_Contents>
				{Data.map((item) => {
					return (
						<Announcement_Content key={item?.noticeId}>
							<Content_Info>
								<Content_Name>{item?.creatorName}</Content_Name>
								<Content_Tag>판매자</Content_Tag>
							</Content_Info>

							<Content_Date>{item?.createTime}</Content_Date>

							<Content_Title>{item?.title}</Content_Title>

							<Content_SubTitle>{item?.content}</Content_SubTitle>

							<Content_Provider />
						</Announcement_Content>
					);
				})}
			</Announcement_Contents>
		</Announcement_Container>
	);
};

Announcement.propTypes = {
	Data: PropTypes.node.isRequired,
};

const Announcement_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 35px;
`;

const Announcement_Title = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #494B4D;
  outline: none;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 0 15px;
`;

const Announcement_SubTitle = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #494B4D;
  outline: none;
  border-radius: 5px;
  padding: 12px 15px;
  resize: vertical;
  margin-bottom: 16px;
`;

const Announcement_ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Announcement_Button = styled.button`
  border: none;
  background-color: #AA60C8;
  width: 133px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  border-radius: 10px;
`;

const Announcement_Contents = styled.div`
  width: 100%;
`;

const Announcement_Content = styled.div`
  width: 100%;
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

const Content_Tag = styled.div`
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

const Content_Date = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 16px;
`;

const Content_Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const Content_SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Content_Provider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #EBEBEB;
  margin-top: 42px;
  margin-bottom: 24px;
`;

export default Announcement;
