import styled from '@emotion/styled';
import Test from '../../assets/test.jpg';

const Category = () => {
	return (
		<Category_Container>
			<Category_Img src={Test} />
			<Category_Text>에스파</Category_Text>
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
`;

const Category_Text = styled.div`
  font-size: 16px;
`;

export default Category;
