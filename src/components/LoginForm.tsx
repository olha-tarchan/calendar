import React, {FC, useState} from 'react';
import {Form, Input, Button, Card, Col} from 'antd';
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useActions";
import Meta from "antd/es/card/Meta";

const LoginForm : FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const {login} = useAction();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        login(username, password);
    }

    return (
        <Card title="Login" bordered={false} style={{ width: 400 }}>
            <Meta description="Choose one of the users [user - password]:" />
            <Meta style={{marginBottom: 10 }} description="admin - a123, olha - o123, user1 - u123" />
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={submit}
                        autoComplete="off"
                    >
                        {error &&
                        <div style={{color:"red"}}>
                            {error}
                        </div>
                        }
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[ rules.required('Please input your username') ]}
                        >
                            <Input
                                value={username}
                                onChange={e=> setUsername(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[ rules.required('Please input your password') ]}
                        >
                            <Input.Password
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button
                                loading={isLoading}
                                type="primary"
                                htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
    );
};

export default LoginForm;