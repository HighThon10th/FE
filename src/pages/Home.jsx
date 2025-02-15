import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import SearchBar from '../components/searchbar';
import Category from '../components/category';
import HomeContent from '../components/home_content';

const Home = () => {
	const [selectedOption, setSelectedOption] = useState('최신순');

	const handleSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<Container>
			<Header />
			<SearchBar />
			<Home_Category>
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
			</Home_Category>

			<Home_Provider />

			<Home_Selecter>
				<Selecter_Option
					className={selectedOption === '최신순' ? 'selected' : ''}
					onClick={() => handleSelect('최신순')}
				>
					최신순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === '오래된순' ? 'selected' : ''}
					onClick={() => handleSelect('오래된순')}
				>
					오래된순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === '좋아요순' ? 'selected' : ''}
					onClick={() => handleSelect('좋아요순')}
				>
					좋아요순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === '달성순' ? 'selected' : ''}
					onClick={() => handleSelect('달성순')}
				>
					달성순
				</Selecter_Option>
			</Home_Selecter>

			<Home_Content>
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
				<HomeContent />
			</Home_Content>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 0 10%;
`;

const Home_Category = styled.div`
	width: 100%;
	min-height: 100px;
	height: 100px;
	display: flex;
	align-items: start;
	margin-top: 60px;
	gap: 50px;
	overflow: scroll;
`;

const Home_Provider = styled.div`
	width: 1440px;
	height: 1px;
	background-color: #DEDEDE;
	margin-top: 20px;
`;

const Home_Selecter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 12px;
	margin-top: 24px;
`;

const Selecter_Option = styled.div`
	font-size: 16px;
	margin-top: 20px;
	cursor: pointer;
	color: #ACACAC;

	&.selected {
		color: #000;
	}
`;

const Home_Content = styled.div`
	display: grid;
	width: 74vw;
	grid-template-columns: repeat(4, 1fr);
	gap: 80px;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export default Home;
