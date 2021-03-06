import {EventActionEnum, EventState, EventAction} from "./types";

const initialState:EventState = {
    events:[],
    guests:[]
}

export default function EventReducer(state = initialState, action: EventAction){
    switch (action.type){
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        case EventActionEnum.DELETE_EVENT:
            return {...state, events: action.payload}
        default:
            return state;
    }
}