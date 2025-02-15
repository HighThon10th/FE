import styled from '@emotion/styled';

const Coummunity = () => {
	return (
		<Coummunity_Container>
			<Coummunity_Title placeholder='댓글을 작성하세요.' />
			<Coummunity_ButtonLayout>
				<Coummunity_Button>댓글 작성</Coummunity_Button>
			</Coummunity_ButtonLayout>

			<Coummunity_Contents>
				<Coummunity_Content>
					<Content_Info>
						<Content_Name>이름이름이름</Content_Name>
						<Content_Tag_Seller>판매자</Content_Tag_Seller>
					</Content_Info>

					<Content_Date>2025.02.16</Content_Date>

					<Content_Title>이 펀딩 진짜 추천해요!!</Content_Title>

					<Content_Provider />
				</Coummunity_Content>
				<Coummunity_Content>
					<Content_Info>
						<Content_Name>이름이름이름</Content_Name>
						<Content_Tag_Buyer>구매자</Content_Tag_Buyer>
					</Content_Info>

					<Content_Date>2025.02.16</Content_Date>

					<Content_Title>이 펀딩 진짜 추천해요!!</Content_Title>

					<Content_Provider />
				</Coummunity_Content>
			</Coummunity_Contents>
		</Coummunity_Container>
	);
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
