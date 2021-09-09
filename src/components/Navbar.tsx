import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import { useHistory } from 'react-router-dom';
import {RouterName} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useAction} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory();
    //  const dispatch = useDispatch();  вместо dispatch используем hook useActions
    const {logout} = useAction();
    const {user, isAuth} = useTypedSelector(state => state.auth);


    return (
        <Layout.Header>
            <Row justify="end">

                {isAuth
                    ?
                    <>
                        <div style={{color:'white'}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false} >
                            <Menu.Item
                               // onClick={()=>dispatch(AuthActionCreators.logout())}
                                onClick={logout}     // used hook useActions
                                key={1}>
                                Out
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                        <Menu theme="dark" mode="horizontal" selectable={false} >
                            <Menu.Item
                                onClick={()=>router.push(RouterName.LOGIN)}
                                key={1}>
                                Login Now
                            </Menu.Item>
                        </Menu>
                    </>

                }



            </Row>
        </Layout.Header>
    );
};

export default Navbar;