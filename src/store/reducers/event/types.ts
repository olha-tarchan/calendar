import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS",
    DELETE_EVENT = "DELETE_EVENT"
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[]
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[]
}

export interface DeleteEvent {
    type: EventActionEnum.DELETE_EVENT;
    payload: string
}

export type EventAction =
    SetEventsAction |
    SetGuestsAction |
    DeleteEvent