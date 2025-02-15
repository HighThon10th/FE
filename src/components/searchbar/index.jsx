import styled from '@emotion/styled';
import { SearchIcon } from '../../assets/icon';

const SearchBar = () => {
	return (
		<SearchBar_Layout>
			<Searchbar_Container>
				<Searchbar_Input placeholder='당신의 Funorite를 검색해보세요!' />
				<SearchIcon />
			</Searchbar_Container>
		</SearchBar_Layout>
	);
};

const SearchBar_Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
`;

const Searchbar_Container = styled.div`
  padding: 0 20px;
  border: 1px solid #D0D1D2;
  width: 840px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  border-radius: 12px;
`;

const Searchbar_Input = styled.input`
  height: 56px;
  width: 96%;
  border: none;
  outline: none;
  font-size: 16px;
`;

export default SearchBar;
