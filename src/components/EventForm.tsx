import React, {FC, useState} from 'react';
import {Button, Form, Input, DatePicker, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void; //обычная ф-ция которая ничего не возращает но аргументом принимает event
                                    // тоесть с помощью колбека будем передавать данные на уровень выше,
                                    // к page/Event.tsx
}
//const EventForm:FC<EventFormProps> = (props) => {
const EventForm:FC<EventFormProps> = ({guests,submit}) => {

    //создаем состояние в котором будем хронить изменения в форме:
    const [event, setEvent] = useState<IEvent>({
        author:'',
        guest: '',
        date:   '',
        description:  '',
    } as IEvent);


    const {user} = useTypedSelector(state => state.auth)//данные залогиненого user

    const selectDate = (date: Moment | null) => {
        if(date){
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        submit({...event, author: user.username}); //передаем в page/Event.tsx
    }

    return (
        <Form
            onFinish={submitForm}
        >
            <Form.Item
                label="Description event"
                rules={[ rules.required() ]}
            >
                <Input
                    name="description"
                    onChange={e=> setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Date"
                name="date"
                rules={[ rules.isDateAfter("You can't create event in past") ]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Guest"
                name="guest"
            >
                <Select
                   onChange={(guest:string) => setEvent({...event, guest }) }>
                    {guests.map(gue =>
                        <Select.Option value={gue.username} key={gue.username} >
                            {gue.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit" >
                        Create
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;