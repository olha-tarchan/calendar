import {IUser} from "../../../models/IUser";
import {
    AuthActionEnum,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setIsAuth: (auth:boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload:auth}),
    setUser: (user:IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload:user}),
    setIsLoading: (payload:boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload:string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username:string, password: string) => async(dispatch:AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./user.json');
                const mockUser = response.data
                    .find(user => user.username === username && user.password === password);
                if(mockUser){
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    localStorage.setItem('password', mockUser.password);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                    dispatch(AuthActionCreators.setError(''));
                } else {
                    dispatch(AuthActionCreators.setError('Failed correctly fill user or password'));
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        }
        catch(e){
            dispatch(AuthActionCreators.setError("We have Error during login"));
        }
    },
    logout: () => async (dispatch:AppDispatch) => {
        try {
            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            dispatch(AuthActionCreators.setIsAuth(false));
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setError(''));
        }
        catch(e){
            dispatch(AuthActionCreators.setError("We have Problem with LogOut"));
        }
    }
}