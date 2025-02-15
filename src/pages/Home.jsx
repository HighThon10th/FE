import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import SearchBar from '../components/searchbar';
import Category from '../components/category';
import HomeContent from '../components/home_content';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [selectedOption, setSelectedOption] = useState('LATEST');
	const [categoryData, setCategoryData] = useState([]);
	const [contentData, setContentData] = useState([]);
	const navigation = useNavigate();

	const handleSelect = (option) => {
		setSelectedOption(option);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				await axios
					.get('https://back.highthon10.kro.kr/category')
					.then((res) => {
						setCategoryData(res.data);
					});
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				await axios
					.get(
						`https://back.highthon10.kro.kr/funding/search?page=0&size=20&searchType=${selectedOption}`,
						{
							headers: {
								Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
							},
						}
					)
					.then((res) => {
						setContentData(res.data.funding);
						console.log(res.data.funding);
					});
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [selectedOption]);

	return (
		<Container>
			<Header />
			<SearchBar />
			<Home_Category>
				{categoryData.map((data) => (
					<Category
						key={data.categoryId}
						imgUrl={data.categoryImgUrl}
						Text={data.name}
					/>
				))}
			</Home_Category>

			<Home_Provider />

			<Home_Selecter>
				<Selecter_Option
					className={selectedOption === 'LATEST' ? 'selected' : ''}
					onClick={() => handleSelect('LATEST')}
				>
					최신순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === 'OLD' ? 'selected' : ''}
					onClick={() => handleSelect('OLD')}
				>
					오래된순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === 'POPULAR' ? 'selected' : ''}
					onClick={() => handleSelect('POPULAR')}
				>
					좋아요순
				</Selecter_Option>
				<Selecter_Option
					className={selectedOption === 'ACHIEVEMENT' ? 'selected' : ''}
					onClick={() => handleSelect('ACHIEVEMENT')}
				>
					달성순
				</Selecter_Option>
			</Home_Selecter>

			<Home_Content>
				{contentData.map((data) => (
					<HomeContent
						key={data.fundingId}
						Rate={data.achievementPercentage}
						ImgUrl={data.thumbnailImgUrl}
						Title={data.title}
						onClick={() => {
							navigation(`/detail/${data.fundingId}`);
						}}
					/>
				))}
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
	min-height: 110px;
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
