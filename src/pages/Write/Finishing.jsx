import styled from "@emotion/styled"
import Header from "../../components/header";
import { useEffect, useState } from "react";

function Finishing() {
    const [ischeck, setIscheck] = useState(false)
    const [isimginput, setIsimginput] = useState(false)
    const [imgsrc, setImgsrc] = useState(null)

    const [input, setInput] = useState({
        title: "",
        content: "",
        amount: null,
        date: null,
        category: ""
    })

    const onClickIsclick = () => {
        setIscheck(!ischeck)
    }

    const setImg = () => {
        setIsimginput(true)
    }

    const onChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        console.log(imgsrc)
        setIsimginput(false)
    },[imgsrc])

    return (
        <Container>
            <Header/>
            <Box_Image inputimg= {imgsrc}>
                <Button_Container>
                    <Button_Button onClick={setImg}>썸네일 설정하기</Button_Button>
                </Button_Container>
                {
                    isimginput&&<input
                        type='file'
                        onChange={(e)=>setImgsrc(e.target.value)}
                    />
                }
            </Box_Image>

            <InputTitle_Container>
                <InputTitle_Input
                    placeholder="제목을 작성해주세요"
                    name="title"
                    onChange={(e)=>onChangeInput(e)}
                />
            </InputTitle_Container>

            <InputContent_Container>
                <InputContent_Input
                    placeholder="설명글을 작성해주세요"
                    name="content"
                    onChange={(e)=>onChangeInput(e)}
                />
            </InputContent_Container>

            <Box01>
                <MiniInput_Container>
                    <MiniInput_Input
                        placeholder="금액을 측정해주세요"
                        name="amount"
                        onChange={(e)=>onChangeInput(e)}
                    />
                </MiniInput_Container>
                <Txt01>만원</Txt01>
                <MiniInput_Container>
                    <MiniInput_Input
                        placeholder="펀딩기간을 설정해주세요"
                        name="date"
                        onChange={(e)=>onChangeInput(e)}
                    />
                </MiniInput_Container>
            </Box01>
                
            <Box01>
                <MiniInput_Container>
                    <MiniInput_Input
                        placeholder="카테고리를 선택해주세요"
                        name="category"
                        onChange={(e)=>onChangeInput(e)}
                    />
                </MiniInput_Container>

                <Box_Flexed>
                    <Txt02>저작권 확인이 필요한 상품인가요?</Txt02>
                    <Check_Box_Container ischeck={ischeck}>
                        <Check_Box_Button ischeck={ischeck} onClick={onClickIsclick}/>
                    </Check_Box_Container>
                </Box_Flexed>
            </Box01>
            <Button_Container>
                <Button_Button>펀딩 시작하기</Button_Button>
            </Button_Container>
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


const Box_Image = styled.div`
    width: 656px;
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
`

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
`

const InputTitle_Input = styled.input`
    width: 96%;
    height: 40px;
    font-size: 15px;
    border: none;
    outline: none;
`

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
`

const InputContent_Input = styled.input`
    width: 96%;
    height: 82px;
    font-size: 15px;
    border: none;
    outline: none;
`

const Box01 = styled.div`
    width: 656px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
`

const MiniInput_Container = styled.div`
    width: 290px;
    height: 40px;
    padding: 0 20px;
    justify-content: center;

    outline: 1px solid;
    border-radius: 5px;
`

const MiniInput_Input = styled.input`
    width: 96%;
    font-size: 15px;
    height: 100%;
    border: none;
    outline: none;
`

const Txt01 = styled.p`
    width: 44px;
    height: 30px;
    margin-top: 10px;
    font-size: 15px;
`

const Txt02 = styled.p`
    width: 150px;
    height: 50px;
    margin-top: -5px;
    font-size: 10;
`

const Box_Flexed = styled.div`
    display: flex;
`

const Check_Box_Container = styled.div`
    width: 20px;
    height: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    outline: 1px solid;
    border-radius: 5px;

    background-color: ${({ ischeck }) => ( ischeck?"#AA60C8":"#FFFFFF" )};
`

const Check_Box_Button = styled.button`
    width: 96%;
    height: 100%;
    border: none;
    outline: none;

    background-color: ${({ ischeck }) => ( ischeck?"#AA60C8":"#FFFFFF" )};
`

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
`
const Button_Button = styled.button`
    width: 96%;
    height: 100%;
    font-size: 30px;
    border: none;
    outline: none;
    background-color: #AA60C8;
    color: white;
`

export default Finishing