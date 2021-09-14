import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import { Row, Button, Modal} from "antd";
import EventForm from "../components/EventForm";
import {useAction} from '../hooks/useActions'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";


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

    return (
        <>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button
                    onClick={()=>setModalVisible(true)}
                >Add event</Button>
            </Row>

            <Modal
                title="Add event"
                visible={modalVisible}
                footer={null}
                onCancel={()=> setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </>
    );
};

export default Event;