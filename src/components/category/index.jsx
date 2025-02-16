import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Category = ({ imgUrl, Text }) => {
	return (
		<Category_Container>
			<Category_Img src={imgUrl} />
			<Category_Text>{Text}</Category_Text>
		</Category_Container>
	);
};

const Category_Container = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Category_Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const Category_Text = styled.div`
  font-size: 16px;
`;
Category.propTypes = {
	imgUrl: PropTypes.string.isRequired,
	Text: PropTypes.string.isRequired,
};

export default Category;
