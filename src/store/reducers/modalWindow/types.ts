
export interface ModalData {
    open: boolean;
    data: any
}

export enum ModalWindowActionEnum {
    OPEN_MODAL_WINDOW = "OPEN_MODAL_WINDOW",
    OPEN_MODAL_WINDOW_WITH_DATA = "OPEN_MODAL_WINDOW_WITH_DATA",
    CLOSE_MODAL_WINDOW = "CLOSE_MODAL_WINDOW"
}

export interface OpenModalWindowAction {
    type: ModalWindowActionEnum.OPEN_MODAL_WINDOW,
}

export interface OpenModalWindowWithDataAction {
    type: ModalWindowActionEnum.OPEN_MODAL_WINDOW_WITH_DATA,
    payload: ModalData
}
export interface CloseModalWindowAction {
    type: ModalWindowActionEnum.CLOSE_MODAL_WINDOW
}

export type ModalWindowAction =
    OpenModalWindowAction |
    OpenModalWindowWithDataAction |
    CloseModalWindowAction