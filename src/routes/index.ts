import React from "react";
import Login  from "../pages/Login";
import Event from "../pages/Event";

export interface IRouter {
    path: string;
    component:React.ComponentType;
    exact?: boolean // - позволяет однозначно идентицифировать маршрут
}
//своего рода словарь
export enum RouterName {
    LOGIN = '/login',
    EVENT = '/'
}
//в заыисимости от того или пользователь авторизован или нет
// отображаютсья приватные или публичные маршруты
export const publicRoutes: IRouter[] = [
    {path: RouterName.LOGIN, exact: true, component:Login }     //маршрут который будет переводить нас на страницу логина
]

export const privatRoutes: IRouter[] = [
    {path: RouterName.EVENT, exact: true, component: Event }
]