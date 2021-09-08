import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import { useHistory } from 'react-router-dom';
import {RouterName} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const router = useHistory();
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color:'white'}}>User 1</div>
                        <Menu theme="dark" mode="horizontal" selectable={false} >

                            <Menu.Item
                                onClick={()=>console.log("OUT")}
                                key={1}>
                                Out
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item
                            onClick={()=>router.push(RouterName.LOGIN)}
                            key={1}>
                            Login Now
                        </Menu.Item>
                    </Menu>
                }



            </Row>
        </Layout.Header>
    );
};

export default Navbar;