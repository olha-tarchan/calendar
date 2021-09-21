import React, {FC} from 'react';
import { Menu, Row} from 'antd';
import { useHistory } from 'react-router-dom';
import {RouterName} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useActions";
import {Header} from "antd/es/layout/layout";

const Navbar: FC = () => {
    const router = useHistory();
    const {logout} = useAction();
    const {user, isAuth} = useTypedSelector(state => state.auth);

    return (
        <Header>
            <Row  justify="end">
            <div className="logo" />
            {isAuth
                ?
                <>
                    <div style={{color:'white'}}>{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false} >
                        <Menu.Item
                            onClick={logout}
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
        </Header>
    );
};

export default Navbar;