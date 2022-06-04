import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import react from "../../assets/react.svg"
import logo from "../../assets/logo.svg"
import 'antd/dist/antd.css';
import { Form, Input, Button, message} from "antd";
import { http } from "../../util/http";
import { useNavigate } from "react-router";


export const Register = ()=>{
    const navigate = useNavigate()

    const handleLogin = (value)=>{
        console.log(value)
        http.post('/user/login', value).then((res)=>{
            if(res.login){
                navigate('/')
            }else{
                message.error('用户名或密码错误')
            }
        })
        
        
    }

    return <Container>
        <LoginBox>
            <LeftBox>
                <Title>Welcome</Title>
                <Text>to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React.</Text>
                <FlexCenter>
                    <img src={react} alt="" width={'25%'}/>
                </FlexCenter>
            </LeftBox>
            <RightBox>
                <img src={logo} alt="" style={{marginBottom: "20px"}} />
                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item label={"Email"} name={'email'} rules={[{required: true, message: 'Please Enter your Email for login'}]}>
                        <Input placeholder="Email" type={'text'} id="email"/>
                    </Form.Item>

                    <Form.Item label={"Password"} name={'password'} rules={[{required: true, message: '请输入密码'}]}>
                        <Input placeholder="Password" type={'password'} id="password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type={'primary'} htmlType={"submit"}>login</Button>
                        <Button type="primary">Register</Button>
                    </Form.Item>
                </Form>
            </RightBox>
        </LoginBox>
    </Container>
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const LoginBox = styled.div`
    width: 50%;
    height: 60vh;
    border-radius: 1px;
    display: flex;
    box-shadow: 1px 1px 3px rgb(200, 200, 200);
`

const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    background-color: #4268F6;
`
const RightBox = styled.div`
    width: 50%;
    padding: 10px 20px 0 20px;
`

const Title = styled.h1`
    color: #fff;
    margin: 40px 0 32px 40px;
    font-size: 32px;
    font-weight: 300;
`

const Text = styled.p`
    color: #fff;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 15px;
`

const FlexCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`