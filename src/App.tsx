import React, {FC} from 'react';
import propTypes from 'prop-types';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import './App.css';

const App:FC = () => {
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
