import styled from "@emotion/styled";
import { useState } from "react";

const Signup = () => {
    const [input, setInput] = useState({
        id: "",
        password: "",
        nme: "",
        age: null,
        sex: false // false=male, true=female
    })

    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onClickSexMale = () => {
        setInput({
            ...input,
            sex: false
        })
    }

    const onClickSexFemale = () => {
        setInput({
            ...input,
            sex: true
        })
    }

    const print = () => {
        console.log(input)
    }

    return (
        <Container>
            <Signup_Logo>Funorite</Signup_Logo>
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
                <Inputbar_Layout>
                    <Inputbar_Container>
                        <Inputbar_Input 
                            placeholder='이름을 입력해주세요' 
                            type='text'
                            name='nme'
                            value={input.nme}
                            onChange={onChangeInput}
                        />
                    </Inputbar_Container>
                </Inputbar_Layout>
                <Inputbar_Layout>
                    <Inputbar_Container>
                        <Inputbar_Input 
                            placeholder='나이를 입력해주세요' 
                            type='number'
                            name='age'
                            value={input.age}
                            onChange={onChangeInput}
                        />
                    </Inputbar_Container>
                </Inputbar_Layout>

                <Sextoggle_Layout>
                    <Sextoggle_Container_male 
                        sex={input.sex}>
                        <Sextoggle_Button_male
                            sex={input.sex}
                            name='sex'
                            onClick={onClickSexMale}>남자</Sextoggle_Button_male>
                    </Sextoggle_Container_male>
                    <Sextoggle_Container_female sex={input.sex}>
                        <Sextoggle_Button_female
                            sex={input.sex}
                            name='sex'
                            onClick={onClickSexFemale}>여자</Sextoggle_Button_female>
                    </Sextoggle_Container_female>
                </Sextoggle_Layout>

                <Button_Layout>
                    <Button_Container>
                        <Button_Button onClick={print}>회원가입</Button_Button>
                    </Button_Container>
                </Button_Layout>

                <Signin_Container>
                    <Signin_Text>이미 회원이신가요?</Signin_Text>
                    <Singin href='/signin'>로그인</Singin>
                </Signin_Container>
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

const Signup_Logo = styled.div`
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
const Sextoggle_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    align-items: center;
`
const Sextoggle_Container_male = styled.div`
    padding: 0 20px;
    border: 1px solid;
    border-color: ${({ sex }) => (sex?'#CFCFCF':'#D69ADE')};
    background-color: ${({ sex }) => (sex?'#FFFFFF':'#D69ADE')};
    width: 280px;
    display: flex;
    align-items: center;
    border-radius: 12px;
`
const Sextoggle_Container_female = styled.div`
    padding: 0 20px;
    border: 1px solid;
    border-color: ${({ sex }) => (sex==false?'#CFCFCF':'#D69ADE')};
    background-color: ${({ sex }) => (sex==false?'#FFFFFF':'#D69ADE')};
    width: 280px;
    display: flex;
    align-items: center;
    border-radius: 12px;
`

const Sextoggle_Button_male = styled.button`
    height: 60px;
    width: 96%;
    background-color: ${({ sex }) => (sex?'#FFFFFF':'#D69ADE')};
    border: none;
    outline: none;
    font-size: 30px;
    text-align: center;
    color: ${({ sex }) => (sex?'#CFCFCF':'#FFFFFF')};
`

const Sextoggle_Button_female = styled.button`
    height: 60px;
    width: 96%;
    background-color: ${({ sex }) => (sex==false?'#FFFFFF':'#D69ADE')};
    border: none;
    outline: none;
    font-size: 30px;
    text-align: center;
    color: ${({ sex }) => (sex==false?'#CFCFCF':'#FFFFFF')};
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
const Signin_Container = styled.div`
    width: 100%;
    display: flex;
    margin-left: 35px;
    gap: 20px;
`
const Signin_Text = styled.p`
    font-size: 18px;
    color: #CFCFCF;
`

const Singin = styled.a`
    font-size: 18px;
    color: #EABDE6;
    text-decoration-line: none;
`

export default Signup