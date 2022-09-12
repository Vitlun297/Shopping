import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import './Order.css'
import { useNavigate } from 'react-router-dom';
import {
    AutoComplete,
    Button,
    Form,
    Input,
    Select,
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function Order() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
    });
    const [form] = Form.useForm();
    const onFinish = () => {
        alert('Order complete! thank you ')
        navigate("/")
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
    });
    return (
        <div className="container-form">
            <Form
                {...formItemLayout}
                form={form}
                name="order"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="Fullname"
                    label="Fullname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Fullname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="Country"
                    label="Country"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Country!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="Address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input website!',
                        },
                    ]}
                >
                    <AutoComplete placeholder="Street Address">
                        <Input />
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    name="Town"
                    label="Town/City"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Town/City!',
                        },
                    ]}
                >
                    <AutoComplete placeholder="Town/City">
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item
                    name="Country-state"
                    label="Country/State"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Country/State!',
                        },
                    ]}
                >
                    <AutoComplete placeholder="Country/State">
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item
                    name="Postcode-ZIP"
                    label="Postcode/ZIP"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Postcode-ZIP!',
                        },
                    ]}
                >
                    <AutoComplete placeholder="Postcode-ZIP">
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item
                    name="Ordernote"
                    label="Order note"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Order note!',
                        },
                    ]}
                >
                    <AutoComplete placeholder="Order note">
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Order
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Order