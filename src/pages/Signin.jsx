import styled from '@emotion/styled';
import { useState } from 'react';

const Signin = () => {
    const [input, setInput] = useState({id: "", password: ""})

    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const print = () => {
        console.log(input)
    }

    return (
        <Container>
            <Signin_Logo>Funorite</Signin_Logo>
            <Signin_Input>
                <Inputbar_Layout>
                    <Inputbar_Container>
                        <Inputbar_Input 
                            placeholder='아이디를 입력해주세요' 
                            type='text'
                            name='id'
                            value={input.id}
                            onChange={onChangeInput}
                        />
                    </Inputbar_Container>
                </Inputbar_Layout>
                <Inputbar_Layout>
                    <Inputbar_Container>
                        <Inputbar_Input
                            placeholder='비밀번호를 입력해주세요'
                            type='password'
                            name='password'
                            value={input.password}
                            onChange={onChangeInput}
                        />
                    </Inputbar_Container>
                </Inputbar_Layout>

                <Button_Layout>
                    <Button_Container>
                        <Button_Button onClick={print}>로그인</Button_Button>
                    </Button_Container>
                </Button_Layout>
                
                <Signup_Container>
                    <Signup_Text>회원이 아니신가요?</Signup_Text>
                    <Singup href='/signup'>회원가입</Singup>
                </Signup_Container>
            </Signin_Input>
        </Container>
    )
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

const Signin_Logo = styled.div`
    width: 100%;
    height: 284px;
    font-size: 60px;
    font-weight: semibold;
    margin-top: 122px;

    text-align: center;
`

const Signin_Input = styled.div`
    width: 650px;
    height: 650px;
    margin-bottom: 146px;

    display: flex;
    flex-direction: column;
`

const Button_Container = styled.div`
    padding: 0 20px;
    border: 1px solid #D69ADE;
    background-color: #D69ADE;
    width: 580px;
    display: flex;
    align-items: center;
    border-radius: 12px;
`

const Button_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const Button_Button = styled.button`
    height: 60px;
    width: 96%;
    background-color: #D69ADE;
    border: none;
    outline: none;
    font-size: 30px;
    text-align: center;
    color: white;
`

const Inputbar_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Inputbar_Container = styled.div`
    padding: 0 20px;
    border: 1px solid #CFCFCF;
    width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
`

const Inputbar_Input = styled.input`
    width: 96%;
    height: 60px;
    border: none;
    outline: none;
    font-size: 16px;
`

const Signup_Container = styled.div`
    width: 100%;
    display: flex;
    margin-left: 35px;
    gap: 20px;
`

const Signup_Text = styled.p`
    font-size: 18px;
    color: #CFCFCF;
`

const Singup = styled.a`
    font-size: 18px;
    color: #EABDE6;
    text-decoration-line: none;
`

export default Signin