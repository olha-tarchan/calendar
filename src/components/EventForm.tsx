import React, {FC, useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IEvent} from "../models/IEvent";
import moment, {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useActions";

const initialEvent = {
    id: '',
    author: '',
    guest: '',
    date: formatDate(moment().toDate()),
    description: ''
}

const EventForm: FC = () => {
    const {createEvent, editEvent, deleteEvent, closeModalWindow} = useAction();
    const {user} = useTypedSelector(state => state.auth);
    const {data} = useTypedSelector(state => state.modalWindow);
    const {guests} = useTypedSelector<any>(state => state.event)

    const [event, setEvent] = useState<IEvent>(initialEvent as IEvent);     //создаем состояние в котором будем хронить изменения в форме:
    const [isEdit, setIsEdit] = useState(false);

    const dateFormat = 'YYYY/MM/DD';

    useEffect(() => {
        if (data.author) {
            setEvent({
                ...event,
                id: data.id,
                author: data.author,
                guest: data.guest,
                date: data.date,
                description: data.description
            });
            setIsEdit(true);
        } else {
            setEvent({
                ...event,
                ...initialEvent
            });
            setIsEdit(false);
        }
    }, [data]);

    const selectDate = (dateMoment: Moment | null) => {
        if (dateMoment) {
            setEvent({...event, date: formatDate(dateMoment.toDate())})
        }
    }

    const handleDeleteEvent = () => {
        deleteEvent(event.id);
        closeModalWindow();
    }
    const submitForm = () => {
        if (isEdit) {
            editEvent(event);
        } else {
            createEvent({
                ...event,
                id: `id-${Number(Date.now().toString())}-${event.description.replaceAll(" ", '')}`,
                author: user.username
            });
        }
        closeModalWindow();
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Description"
            >
                <Input
                    name="descriptionValue"
                    value={event.description}
                    onChange={(e) => setEvent({
                         ...event,
                         description: e.target.value
                     })}
                />
            </Form.Item>

            <Form.Item
                label="Date"
                rules={[rules.isDateAfter("You can't create event in past")]}
            >
                <DatePicker
                    value={moment(event.date, dateFormat)}
                    format={dateFormat}
                    onChange={(date) => selectDate(date)}
                />

            </Form.Item>
            <Form.Item
                label="Guest"
                rules={[rules.required()]}
            >
                <Select
                    value={event.guest || event.author}
                    onChange={(guest: string) => setEvent({...event, guest})}>
                    {guests.map((gue: any) =>
                        <Select.Option value={gue.username} key={gue.username}>
                            {gue.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    {isEdit &&
                    <Button
                        style={{"marginRight": "10px"}}
                        type="default"
                        htmlType="button"
                        onClick={handleDeleteEvent}>
                        Delete
                    </Button>}
                    <Button
                        type="primary"
                        htmlType="submit">
                        {isEdit ? "Edit" : "Create"}
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;

