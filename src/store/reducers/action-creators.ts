import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreator} from "./event/action-creator";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreator
}