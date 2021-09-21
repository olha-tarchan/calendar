import {EventActionEnum, SetGuestsAction, SetEventsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreator = {
    setGuests: (payload:IUser[]): SetGuestsAction => ({
        type:EventActionEnum.SET_GUESTS,
        payload
    }),
    setEvents: (payload:IEvent[]): SetEventsAction => ({
        type:EventActionEnum.SET_EVENTS,
        payload
    }),
    fetchGuest: () => async (dispatch:AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch((EventActionCreator.setGuests(response.data)))
        } catch (e){
            console.log("Error in EventActionCreator", e);
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try{
            const events = localStorage.getItem("events") || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreator.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch:AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch((EventActionCreator.setEvents(currentUserEvents)))
        } catch (e){
            console.log("Error in fetchEvents", e);
        }
    },
    editEvent:(event:IEvent) => async (dispatch: AppDispatch) => {
        try{
            const events = localStorage.getItem("events") || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.map(ev => {
                if(ev.id === event.id) {
                    ev.author = event.author;
                    ev.date = event.date;
                    ev.description = event.description;
                    ev.guest = event.guest;
                }
                return ev
            })
           dispatch(EventActionCreator.setEvents(json));
           localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            console.log(e)
        }
    },
    deleteEvent:(eventId:string) => async (dispatch: AppDispatch) => {
    try{
        console.log("DELETe", eventId);
        const events = localStorage.getItem("events") || '[]';
        const json = JSON.parse(events) as IEvent[];
        const currentEvents =json.filter(ev => ev.id!== eventId)
        dispatch(EventActionCreator.setEvents(currentEvents));
        localStorage.setItem('events', JSON.stringify(currentEvents));
    } catch (e) {
        console.log(e)
    }
},


}