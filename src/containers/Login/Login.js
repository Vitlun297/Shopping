import React from 'react'
import 'antd/dist/antd.min.css'
import './Login.css'
import { LockOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
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
                <h1 className='login-title'>Login</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="usename"

                        rules={[
                            {
                                required: true,
                                message: 'Please input your Usename!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="usename" placeholder="Usename"
                            className='input-usename'
                            id="usename"
                        />
                    </Form.Item>
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
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            className='input-pass'
                            placeholder="Password"
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
                        <Button type="primary" htmlType="submit" className="login-form-button" size='large'>
                            <LoginOutlined />Log in
                        </Button><br />
                        Or <Link to="/register">register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login