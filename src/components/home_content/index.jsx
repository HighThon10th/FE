import styled from '@emotion/styled';
import Test from '../../assets/test.jpg';

const HomeContent = () => {
	return (
		<Home_Content>
			<Content_Img src={Test} />
			<Content_Rate>64,000% 달성</Content_Rate>
			<Content_Title>
				규현 (KYUHYUN) 정규 앨범 [COLORS] (Color Swatch Book ver.)
			</Content_Title>
		</Home_Content>
	);
};

const Home_Content = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 10px;
`;

const Content_Img = styled.img`
  width: 280px;
  height: 150px;
`;

const Content_Rate = styled.div`
  color: #F132E7;
  font-size: 16px;
  font-weight: 600;
`;

const Content_Title = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export default HomeContent;
