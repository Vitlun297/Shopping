import React from 'react'
import 'antd/dist/antd.min.css'
import './Login.css'
import { Button, Checkbox, Form, Input } from 'antd'
import axiosInstance from '../../utils/Request';
import { Link, useNavigate } from 'react-router-dom'




function Login() {

    const navigate = useNavigate()

    const onFinish = async (data) => {
        axiosInstance.post('/auth/login', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                navigate('/')
            })
            .catch((error) => {
                console.log("loi", error)
                alert('đăng nhập không thành công. Vui lòng thử lại!')
            });
    }
    return (
        <div className='Form-login'>
            <div className='login'>
                <h1 className='login-title'>Account</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <p className='form-login-title'>Usename:</p>
                    <Form.Item
                        name="usename"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Usename!',
                            },
                        ]}
                    >
                        <Input type="usename"
                            className='input-usename'
                            id="usename"
                        />
                    </Form.Item>
                    <p className='form-login-title'>Password:</p>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            className='input-pass'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/#">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login