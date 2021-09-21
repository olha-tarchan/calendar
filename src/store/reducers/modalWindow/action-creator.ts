import {ModalWindowActionEnum, CloseModalWindowAction, OpenModalWindowAction, OpenModalWindowWithDataAction} from "./types";
import {ModalData} from "./types";

export const ModalWindowActionCreator = {
    openModalWindow: (data:boolean): OpenModalWindowAction => ({
        type:ModalWindowActionEnum.OPEN_MODAL_WINDOW
    }),
    openModalWindowWithData: (data:ModalData): OpenModalWindowWithDataAction => ({
        type:ModalWindowActionEnum.OPEN_MODAL_WINDOW_WITH_DATA,
        payload:data
    }),
    closeModalWindow: (): CloseModalWindowAction => ({
        type:ModalWindowActionEnum.CLOSE_MODAL_WINDOW
    }),

}