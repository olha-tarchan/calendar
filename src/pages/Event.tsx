import React, {FC, useEffect } from 'react';
import EventCalendar from "../components/EventCalendar";
import { Row, Button} from "antd";
import {useAction} from '../hooks/useActions'
import {useTypedSelector} from "../hooks/useTypedSelector";
import ModalWindow from "../components/ModalWindow";


const Event:FC = () => {
    const {fetchGuest, fetchEvents, openModalWindow } = useAction();
    const {events} = useTypedSelector(state => state.event);
     const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuest();
        fetchEvents(user.username);
    }, []);

    return (
        <>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button
                    onClick={()=>openModalWindow(true)}
                >Add event</Button>
            </Row>
            <ModalWindow
                title="Add event"
            />
        </>
    );
};

export default Event;