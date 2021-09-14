import React, {FC} from 'react';
import { Menu, Row} from 'antd';
import { useHistory } from 'react-router-dom';
import {RouterName} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useActions";
import {Header} from "antd/es/layout/layout";

// import {useDispatch} from "react-redux";
// import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
    const router = useHistory();
    //  const dispatch = useDispatch();  вместо dispatch используем hook useActions
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
                            // onClick={()=>dispatch(AuthActionCreators.logout())}
                            onClick={logout}     // used hook useActions
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