import ReactQuill from "react-quill-new";
import styled from "@emotion/styled"
import Header from "../../components/header";
import * as DOMPurify from 'isomorphic-dompurify';
import { useEffect, useState } from "react";

function Write() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(()=>{
        console.log(title)
    },[title])

    const onChangeContent = (contents) => {
        setContent(contents)
    }

    const onChangeTitle = (title) => {
        setTitle(title)
    }

    const modules = {
        toolbar: {
            container: [
                [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],
        },
	};

    const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'code-block',
		'image',
		'link',
		'ordered',
		'bullet',
	];

     return (
        <Container>
            <Header/>
            <Layout>
                <Input_Layout>

                    <InputTitle_Layout>
                        <InputTitle_Container>
                            <InputTitle_Input
                                placeholder="제목을 입력하세요"
                                onChange={(e)=>onChangeTitle(e.target.value)}
                            />
                        </InputTitle_Container>
                    </InputTitle_Layout>

                    <Boundline_Layout>
                        <Boundline/>
                    </Boundline_Layout>

                    <InputTitle_Layout>
                        <InputTitle_Container>
                            <InputTag_Input placeholder="# 태그를 입력하세요"/>
                        </InputTitle_Container>
                    </InputTitle_Layout>

                    <ReactQuill_Layout>
                        <ReactQuill 
                            style={{ width: '48vw', height: '50vh' }}
                            modules={modules}
                            formats={formats}
                            placeholder="내용을 입력하세요..."
                            onChange={onChangeContent}
                        />
                    </ReactQuill_Layout>
                    
                    <Button_Layout>
                        <Button_Container>
                            <Button_Button>올리기</Button_Button>
                        </Button_Container>
                    </Button_Layout>
                </Input_Layout>

                
                <Prev_Layout>

                    <Title_Layout>
                        <Title_Container>
                            <Title_Print>{title}</Title_Print>
                        </Title_Container>
                    </Title_Layout>

                    <Content_Layout>
                        <Content_Container>
                            <Content_Print
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(content)
                                }}
                            />
                        </Content_Container>
                    </Content_Layout>

                </Prev_Layout>
            </Layout>
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

const Layout = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: start;
`

const Input_Layout = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 20px;
`
const Prev_Layout = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 20px;
    background-color: #F5F5F5;
`
const Title_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Title_Container = styled.div`
    border: none;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title_Print = styled.h1`
    width: 96%;
    height: 60px;
    font-size: 58px;
    color: #555555;
`

const Content_Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Content_Container = styled.div`
    border: none;
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const Content_Print = styled.p`
    width: 96%;
    font-size: 36px;
    color: #555555;
`

const InputTitle_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const InputTitle_Container = styled.div`
    border: none;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const InputTitle_Input = styled.input`
    width: 96%;
    height: 60px;
    border: none;
    outline: none;
    font-size: 58px;
`

const InputTag_Input = styled.input`
    width: 96%;
    height: 30px;
    border: none;
    outline: none;
    font-size: 24px;
`

const Boundline_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const ReactQuill_Layout = styled.div`
    width: 90%;
    height: 60%;
    display: flex;
    justify-content: center;
    margin-left:3.2vw;
    margin-top: 40px;
`

 const Boundline = styled.hr`
    width: 800px;
    height: 3px;
    background-color: #B9B9BC;
    outline: none;
 `

const Button_Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Button_Container = styled.div`
    padding: 0 20px;
    border: 1px solid #D69ADE;
    background-color: #D69ADE;
    width: 112px;
    display: flex;
    align-items: center;
    border-radius: 12px;
`

const Button_Button = styled.button`
    height: 62px;
    width: 96%;
    background-color: #D69ADE;
    border: none;
    outline: none;
    font-size: 25px;
    text-align: center;
    color: white;
`

export default Write;