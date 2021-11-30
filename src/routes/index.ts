import React from "react";
import Login  from "../pages/Login";
import Event from "../pages/Event";

export interface IRouter {
    path: string;
    component:React.ComponentType;
    exact?: boolean;
}

export enum RouterName {
    LOGIN = '/login',
    EVENT = '/'
}

 export const publicRoutes: IRouter[] = [
    {path: RouterName.LOGIN, exact: true, component:Login }
]

export const privatRoutes: IRouter[] = [
    {path: RouterName.EVENT, exact: true, component: Event }
]