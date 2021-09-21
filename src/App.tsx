import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import Navbar from "./components/Navbar";
import './App.css';
import {useAction} from "./hooks/useActions";
import {IUser} from "./models/IUser";


const App:FC = () => {
    const {setUser, setIsAuth} = useAction()
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setUser({username: localStorage.getItem("username" || '') } as IUser   )
            setIsAuth(true);
        }
    })
    return (
        <Layout className="layout">
            <Navbar />
            <Content style={{ padding: '50px' }}>
                <div className="site-layout-content"><AppRouter /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>2021 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;
