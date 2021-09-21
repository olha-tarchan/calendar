import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreator} from "./event/action-creator";
import { ModalWindowActionCreator} from "./modalWindow/action-creator";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreator,
    ...ModalWindowActionCreator
}