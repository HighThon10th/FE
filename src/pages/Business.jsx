import styled from "@emotion/styled"
import axios from 'axios';
import { useState } from "react";

const Business = () => {
    const [businessNum, setBusinessNum] = useState("")

    const onSubmit = async () => {
        //await axios
        // patch -> Home
        window.location.href= '/'
    }

    return (
        <Container>
            <Business_Logo>Funorite</Business_Logo>
            <Business_Input>
                <Inputbar_Layout>
                    <Inputbar_Container>
                        <Inputbar_Input
                            placeholder="사업자등록번호를 입력해주세요"
                            onChange={(e)=>setBusinessNum(e.target.value)}
                        />
                    </Inputbar_Container>
                </Inputbar_Layout>

                <Button_Layout>
                    <Button_Container>
                        <Button_Button onClick={onSubmit}>조회 및 등록</Button_Button>
                    </Button_Container>
                </Button_Layout>
            </Business_Input>
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

const Business_Logo = styled.div`
    width: 100%;
    height: 284px;
    font-size: 60px;
    font-weight: semibold;
    margin-top: 122px;

    text-align: center;
`;

const Business_Input = styled.div`
    width: 650px;
    height: 650px;
    margin-bottom: 146px;

    display: flex;
    flex-direction: column;
`;

const Inputbar_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
const Inputbar_Container = styled.div`
    padding: 0 20px;
    border: 1px solid #CFCFCF;
    width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
`;

const Inputbar_Input = styled.input`
    width: 96%;
    height: 60px;
    border: none;
    outline: none;
    font-size: 16px;
`;

const Button_Container = styled.div`
    padding: 0 20px;
    border: 1px solid #D69ADE;
    background-color: #D69ADE;
    width: 580px;
    display: flex;
    align-items: center;
    border-radius: 12px;
`;

const Button_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Button_Button = styled.button`
    height: 60px;
    width: 96%;
    background-color: #D69ADE;
    border: none;
    outline: none;
    font-size: 30px;
    text-align: center;
    color: white;
`;

export default Business