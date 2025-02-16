import styled from '@emotion/styled';
import Header from '../../components/header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Finishing() {
	const [ischeck, setIscheck] = useState(false);
	const [imgsrc, setImgsrc] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { writeTitle, writeContent, writeTag } = location.state;

	const [input, setInput] = useState({
		title: '',
		content: '',
		amount: null,
		date: null,
		category: '',
	});

	const onClickIsclick = () => {
		setIscheck(!ischeck);
	};

	const onChangeInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];

		setIsLoading(true);
		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await axios.post(
				'https://back.highthon10.kro.kr/image',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setImgsrc(response.data.url);
		} catch (error) {
			console.error('이미지 업로드 실패:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		console.log(imgsrc);
	}, [imgsrc]);

	const onSubmit = async () => {
		try {
			const response = await axios.post(
				'https://back.highthon10.kro.kr/funding',
				{
					title: writeTitle,
					description: input.content,
					thumbnailImgUrl: imgsrc,
					targetAmount: input.amount,
					fundingEndDate: '2025-02-16T00:44:35.961Z',
					categoryId: 1,
					content: writeContent,
					product: {
						price: 0,
						quantity: 0,
					},
					requiredCopyrightPermission: true,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Header />
			<Box_Image
				style={{ backgroundImage: `url(${imgsrc})`, backgroundSize: 'cover' }}
			>
				<input
					type='file'
					onChange={handleImageUpload}
					style={{ display: 'none', width: '650px', height: '380px' }}
					accept='.png, .jpeg, .jpg'
					id='imageUpload'
				/>
				{imgsrc ? (
					''
				) : (
					<Button_Container>
						<ImageUploadLabel htmlFor='imageUpload'>
							{isLoading ? '업로드 중...' : '썸네일 설정하기'}
						</ImageUploadLabel>
					</Button_Container>
				)}
			</Box_Image>

			<InputTitle_Container>
				<InputTitle_Input
					placeholder='제목을 작성해주세요'
					name='title'
					onChange={(e) => onChangeInput(e)}
				/>
			</InputTitle_Container>

			<InputContent_Container>
				<InputContent_Input
					placeholder='설명글을 작성해주세요'
					name='content'
					onChange={(e) => onChangeInput(e)}
				/>
			</InputContent_Container>

			<Box01>
				<MiniInput_Container>
					<MiniInput_Input
						placeholder='금액을 측정해주세요'
						name='amount'
						onChange={(e) => onChangeInput(e)}
					/>
				</MiniInput_Container>
				<Txt01>만원</Txt01>
				<MiniInput_Container>
					<MiniInput_Input
						placeholder='펀딩기간을 설정해주세요'
						name='date'
						onChange={(e) => onChangeInput(e)}
					/>
				</MiniInput_Container>
			</Box01>

			<Box01>
				<MiniInput_Container>
					<MiniInput_Input
						placeholder='카테고리를 선택해주세요'
						name='category'
						onChange={(e) => onChangeInput(e)}
					/>
				</MiniInput_Container>

				<Box_Flexed>
					<Txt02>저작권 확인이 필요한 상품인가요?</Txt02>
					<Check_Box_Container ischeck={ischeck}>
						<Check_Box_Button ischeck={ischeck} onClick={onClickIsclick} />
					</Check_Box_Container>
				</Box_Flexed>
			</Box01>
			<Button_Container>
				<Button_Button onClick={onSubmit}>펀딩 시작하기</Button_Button>
			</Button_Container>
		</Container>
	);
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 10%;
`;

const Box_Image = styled.div`
    width: 650px;
    height: 380px;
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    outline: 2px solid;
    border: 1px solid "#666666";
    border-radius: 3px;

    background: url(inputimg);
`;

const InputTitle_Container = styled.div`
    padding: 0 20px;
    width: 656px;
    height: 40px;
    margin-top: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    outline: 1px solid;
    border-radius: 5px;
`;

const InputTitle_Input = styled.input`
    width: 96%;
    height: 40px;
    font-size: 15px;
    border: none;
    outline: none;
`;

const InputContent_Container = styled.div`
    padding: 0 20px;
    width: 656px;
    height: 82px;
    margin-top: 26px;
    display: flex;
    justify-content: center;
    align-items: start;

    outline: 1px solid;
    border-radius: 5px;
`;

const InputContent_Input = styled.input`
    width: 96%;
    height: 82px;
    font-size: 15px;
    border: none;
    outline: none;
`;

const Box01 = styled.div`
    width: 656px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
`;

const MiniInput_Container = styled.div`
    width: 290px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;

    outline: 1px solid;
    border-radius: 5px;
`;

const MiniInput_Input = styled.input`
    width: 96%;
    font-size: 15px;
    height: 100%;
    border: none;
    outline: none;
`;

const Txt01 = styled.p`
    width: 44px;
    height: 30px;
    margin-top: 10px;
    font-size: 15px;
`;

const Txt02 = styled.p`
    width: 150px;
    height: 50px;
    margin-top: -5px;
    font-size: 10;
`;

const Box_Flexed = styled.div`
    display: flex;
`;

const Check_Box_Container = styled.div`
    width: 20px;
    height: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    outline: 1px solid;
    border-radius: 5px;

    background-color: ${({ ischeck }) => (ischeck ? '#AA60C8' : '#FFFFFF')};
`;

const Check_Box_Button = styled.button`
    width: 96%;
    height: 100%;
    border: none;
    outline: none;

    background-color: ${({ ischeck }) => (ischeck ? '#AA60C8' : '#FFFFFF')};
`;

const Button_Container = styled.div`
    width: 430px;
    height: 60px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    
    outline: 1px solid;
    border-radius: 5px;

    outline-color: #AA60C8;
    background-color: #AA60C8;
`;
const Button_Button = styled.button`
    width: 96%;
    height: 100%;
    font-size: 30px;
    border: none;
    outline: none;
    background-color: #AA60C8;
    color: white;
`;

const ImageUploadLabel = styled.label`
    width: 96%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
`;

export default Finishing;
