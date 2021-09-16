import React, {FC} from 'react';
import {Modal} from "antd";
import {IEvent} from "../models/IEvent";
import EventForm from "./EventForm";
import {IUser} from "../models/IUser";

interface ModalWindowProps {
    visible: boolean;
    guests: IUser[];
    submit: (event: IEvent) => void;
    changeVisible: (i: boolean) => void
}

const ModalWindow :FC<ModalWindowProps> = (props) => {

    const cancelWindow = () =>{
        props.changeVisible(false);
    }

    return (
        <div>
            <Modal
               // title={ Object.keys(props.selectEvent).length ? "Edit event" : "Add event" }
                title= "Add event"
                visible={props.visible}
                onCancel={()=> cancelWindow()}
                footer={null}
            >
                <EventForm
                    guests={props.guests}
                    submit={props.submit}
                />
            </Modal>
        </div>
    );
};

export default ModalWindow;