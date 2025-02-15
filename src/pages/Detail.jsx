import styled from '@emotion/styled';
import Header from '../components/header';
import Pic from '../assets/806X432.jpg';
import { useState } from 'react';
import DetailContent from '../components/detail';
import Announcement from '../components/announcement';
import Coummunity from '../components/coummunity';
import HurtIcon from '../assets/icon/HurtIcon';

const Detail = () => {
	const [selectedOption, setSelectedOption] = useState('상세정보');
	const [like, setLike] = useState(false);

	const handleSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<Detail_Container>
			<Header />
			<Detail_Layout>
				<Detail_Left>
					<Left_Img src={Pic} alt='detail' />

					<Left_Selecter>
						<Selecter_Option
							className={selectedOption === '상세정보' ? 'selected' : ''}
							onClick={() => handleSelect('상세정보')}
						>
							상세정보
						</Selecter_Option>
						<Selecter_Option
							className={selectedOption === '공지사항' ? 'selected' : ''}
							onClick={() => handleSelect('공지사항')}
						>
							공지사항
						</Selecter_Option>
						<Selecter_Option
							className={selectedOption === '커뮤니티' ? 'selected' : ''}
							onClick={() => handleSelect('커뮤니티')}
						>
							커뮤니티
						</Selecter_Option>
					</Left_Selecter>

					{selectedOption === '상세정보' && <DetailContent />}
					{selectedOption === '공지사항' && <Announcement />}
					{selectedOption === '커뮤니티' && <Coummunity />}
				</Detail_Left>

				<Detail_Right>
					<Right_Category>카테고리이름</Right_Category>

					<Right_Provider />

					<Right_Title>
						규현 (KYUHYUN) 정규 앨범 [COLORS] (Photo Book Ver.)
					</Right_Title>
					<Right_SubTitle>
						규현 (KYUHYUN)의 첫 정규 앨범 COLORS는 이름 그대로 규현
						(KYUHYUN)이라는 매개를 통해 유일무이한 색채를 덧입은 음악 컬렉션을
						뜻한다. 규현 (KYUHYUN)의 시그니처인 서정적인 발라드 트랙은 물론, 팝,
						댄스, 뮤지컬 넘버가 연상되는 클래식한 대곡 스타일까지 선보이며 또 한
						번 확장된 스펙트럼을 확인하게 함에 이어 규현 (KYUHYUN)의 목소리로
						고유의 색을 입은 트랙들은 눈앞에 프리즘이 펼쳐지는 듯, 생동감 있게
						완성됐다.
					</Right_SubTitle>

					<Right_Participants>573명 참여</Right_Participants>

					<Right_MoneyGoal>
						230,355,000원 달성 (목표금액 : 30,000,000)
					</Right_MoneyGoal>

					<Right_Price_Layout>
						<Right_Price>320,000 만원</Right_Price>
						<Right_Count>(재고 30개)</Right_Count>
					</Right_Price_Layout>

					<Right_Provider />

					<Right_Buy_Layout>
						<Right_Buy_Like
							onClick={() => setLike(!like)}
							className={like === true ? 'liked' : ''}
						>
							<HurtIcon liked={like === true ? true : false} />
							8,735
						</Right_Buy_Like>
						<Right_Buy_Button>구매하기</Right_Buy_Button>
					</Right_Buy_Layout>
				</Detail_Right>
			</Detail_Layout>
		</Detail_Container>
	);
};

const Detail_Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 0 10%;
  cursor: pointer;
`;

const Detail_Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
	display: flex;
	justify-content: space-between;
	gap: 56px;
`;

const Detail_Left = styled.div`
  width: 806px;
  display: flex;
  flex-direction: column;
`;

const Left_Selecter = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  margin-top: 40px;
  border-bottom: 1px solid #EBEBEB;
`;

const Selecter_Option = styled.div`
  width: 180px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #5c5e61;

  &.selected {
    color: #000;
  }
`;

const Left_Img = styled.img`
  width: 806px;
  height: 432px;
`;

const Detail_Right = styled.div`
	width: 500px;
	height: 700px;
	position: fixed;
	right: 10%;
	padding: 0 16px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 10px;
`;

const Right_Category = styled.div`
	margin: 0 15px;
	font-size: 20px;
	font-weight: 700;
`;

const Right_Provider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #D0D0D0;
	margin-bottom: 13px;
`;

const Right_Title = styled.div`
	margin: 0 15px;
	font-size: 20px;
	font-weight: 700;
`;

const Right_SubTitle = styled.div`
	margin: 0 15px;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 13px;
`;

const Right_Participants = styled.div`
	font-size: 28px;
	font-weight: 700;
	color: #AA60C8;
	padding: 0 16px;
	margin-bottom: -13px;
`;

const Right_MoneyGoal = styled.div`
	width: 100%;
	font-size: 20px;
	font-weight: 400;
	color: #AA60C8;
	padding: 0 16px;
	margin-bottom: 14px;
`;

const Right_Price_Layout = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: end;
	margin-bottom: 11px;
`;

const Right_Price = styled.div`
	font-size: 32px;
	font-weight: 400;
`;

const Right_Count = styled.div`
	font-size: 14px;
	font-weight: 300;
	margin-bottom: 6px;
	margin-left: 4px;
	color: #AA60C8;
`;

const Right_Buy_Layout = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 24px;
`;

const Right_Buy_Like = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	border: 1px solid #888E96;
	font-size: 10px;
	font-weight: 200;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	--webkit-user-select:none;
  --moz-user-select:none;
  --ms-user-select:none;
  user-select:none;
	&.liked {
		border: 1px solid #AA60C8 !important;
		color: #AA60C8 !important;
	}
`;

const Right_Buy_Button = styled.div`
	width: 350px;
	height: 50px;
	border-radius: 10px;
	color: white;
	background-color: #AA60C8;
	font-size: 20px;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Detail;
