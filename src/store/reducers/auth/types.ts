//Типизация (interface):

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}


export interface AuthState {
    isAuth:boolean;
}

/*  SetAuthAction - action с помощью которого меняем значения.
    Данный интерфейс описывает поля данного екшина:
 */
export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean
}

/*
    Обобщающий тип, который объединяет все типы выше
 */
export type AuthAction =
    SetAuthAction