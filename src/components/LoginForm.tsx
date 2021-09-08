import React, {FC, useState} from 'react';
import {Form, Input, Button, Card} from 'antd';
import {rules} from "../utils/rules";
import {useDispatch } from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm : FC = () => {
    const dispatch = useDispatch();
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        dispatch(AuthActionCreators.login(username, password));

    }
    const onFinishFailed = () => {

    }
    return (
        <Card title="Login" bordered={false} style={{ width: 300 }}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={submit}
                onFinishFailed={onFinishFailed}
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
                    //rules={[{ required: true, message: 'Please input your password!' }]}
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