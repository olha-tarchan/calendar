import {ModalData, ModalWindowAction, ModalWindowActionEnum} from './types';

const initialState: ModalData = {
    open: false,
    data: {}
}

export default function modalWindowReducer(state = initialState, action: ModalWindowAction): ModalData {
    switch (action.type) {
        case ModalWindowActionEnum.CLOSE_MODAL_WINDOW:
            return {
                ...state,
                open: false,
                data: {}
            }
        case ModalWindowActionEnum.OPEN_MODAL_WINDOW:
            return {
                ...state,
                open: true,
                data: {}
            }

        case ModalWindowActionEnum.OPEN_MODAL_WINDOW_WITH_DATA:
            return {
                ...state,
                open: true,
                data: action.payload
            }
        default:
            return state
    }
}