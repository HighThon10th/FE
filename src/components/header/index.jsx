import styled from '@emotion/styled';

const Header = () => {
	return (
		<Header_Container>
			<Header_Logo>Funorite</Header_Logo>
			{localStorage.getItem('accessToken') ? (
				<div>펀딩 시작하기</div>
			) : (
				<Header_Register>
					<div>로그인</div>
					<div>회원가입</div>
				</Header_Register>
			)}
		</Header_Container>
	);
};

const Header_Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

const Header_Logo = styled.div`
	font-size: 40px;
	font-weight: semibold;
`;

const Header_Register = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 22px;
`;

export default Header;
