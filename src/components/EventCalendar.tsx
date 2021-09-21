import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import './../App.css';
import {useAction} from "../hooks/useActions";

interface EventCalendarProps {
    events: IEvent[]
}
const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    const {openModalWindowWithData} = useAction()

    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = events.filter(ev => ev.date === formatedDate);
        return (
            <div className="events">
                {currentDayEvents.map((ev: any, index) => {
                        const titleEv = `${ev.guest || ev.author}: ${ev.description}`;
                        return (
                            <div
                                key={index}
                                title={titleEv}
                                onClick={() => openModalWindowWithData(ev)}
                            >
                                {ev.description}
                            </div>
                        )
                    }
                )}
            </div>
        );
    }

    return (
        <Calendar
            fullscreen={true}
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;