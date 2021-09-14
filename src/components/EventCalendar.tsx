import React, {FC} from 'react';
import { Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import './../App.css';

// описываем какие пропсы ожидает данный компонент:
interface EventCalendarProps {
    events: IEvent[]
}
const EventCalendar : FC<EventCalendarProps> = (props) => {

    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);

        return (
           <div className="events">
               {currentDayEvents.map((ev, index) =>{
                   const titleEv = `${ev.guest || ev.author}: ${ev.description}`
                   return (
                       <div
                           key={index}
                           title={titleEv}
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
        <Calendar  fullscreen={true}
                dateCellRender={dateCellRender}
            />
    );
};

export default EventCalendar;