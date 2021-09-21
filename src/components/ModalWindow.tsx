import React, {FC} from 'react';
import {Modal} from "antd";
import EventForm from "./EventForm";
import {useAction} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface ModalWindowProps {
    title: string;
}

const ModalWindow:FC<ModalWindowProps> = ({title}) => {
    const {open, data} = useTypedSelector(state => state.modalWindow)  //данные залогиненого user
    const {closeModalWindow} = useAction();
    const isPropertyAuthor = data.hasOwnProperty("author");

    return (
        <div>
            <Modal
                title= {(isPropertyAuthor) ? "Edit event" : title }
                visible={open}
                onCancel={()=> closeModalWindow()}
                footer={null}
            >
                <EventForm
                />
            </Modal>
        </div>
    );
};

export default ModalWindow;