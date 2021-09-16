import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import { Row, Button} from "antd";
import {useAction} from '../hooks/useActions'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";
import ModalWindow from "../components/ModalWindow";


const Event:FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuest, createEvent, fetchEvents} = useAction();
    const {guests, events} = useTypedSelector(state => state.event)//получаем гостей с состояния с помощью хука useTypedSelector (деструктиризация)
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuest();
        fetchEvents(user.username);
    }, []);

    const addNewEvent = (event:IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }
    const editEvent = (event:any)  => {
        setModalVisible(true);
    }

    const closeWindow = (i:boolean) => {
        setModalVisible(false);
    }

    return (
        <>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button
                    onClick={()=>setModalVisible(true)}
                >Add event</Button>
            </Row>
            <ModalWindow
                visible={modalVisible}
                changeVisible={closeWindow}
                submit={addNewEvent}
                guests={guests}
            />
        </>
    );
};

export default Event;