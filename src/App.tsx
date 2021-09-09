import React, {FC, useEffect} from 'react';
import propTypes from 'prop-types';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import './App.css';
import {useAction} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App:FC = () => {
    const {setUser, setIsAuth} = useAction()
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setUser({username: localStorage.getItem("username" || '') }as IUser   )
            setIsAuth(true);
        }
    })
    return (
        <Layout>
            NAVBAR:
            <Navbar />
            <Layout.Content>
                ROUTER:
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
}


App.propTypes = {};

export default App;
