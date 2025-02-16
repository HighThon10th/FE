import styled from '@emotion/styled';

const Header = () => {
	return (
		<Header_Container>
			<Header_Logo
				onClick={() => {
					window.location.href = '/';
				}}
			>
				Funorite
			</Header_Logo>
			{localStorage.getItem('accessToken') ? (
				<Header_Register>
					<div
						onClick={() => {
							window.location.href = '/write';
						}}
					>
						펀딩 시작하기
					</div>
					<div><Header_Sign href='/business'>사업자등록</Header_Sign></div>
				</Header_Register>
					) : (
				<Header_Register>
					<div><Header_Sign href='/signin'>로그인</Header_Sign></div>
					<div><Header_Sign href='/signup'>회원가입</Header_Sign></div>
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

const Header_Sign = styled.a`
	color: black;
	text-decoration-line: none;
`

export default Header;
