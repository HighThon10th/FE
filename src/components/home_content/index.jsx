import styled from '@emotion/styled';

const HomeContent = ({ ImgUrl, Rate, Title, onClick }) => {
	return (
		<Home_Content onClick={onClick}>
			<Content_Img src={ImgUrl} />
			<Content_Rate>{Number(Rate).toFixed(3)}</Content_Rate>
			<Content_Title>{Title}</Content_Title>
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

import PropTypes from 'prop-types';

HomeContent.propTypes = {
	ImgUrl: PropTypes.string,
	Rate: PropTypes.string.isRequired,
	Title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default HomeContent;
