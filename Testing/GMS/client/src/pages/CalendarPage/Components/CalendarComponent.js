import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = (props) => {
    return (
        <>
            <div className="content">
                <div className="row">
                    <div className="col-md-10 ml-auto mr-auto">
                        <div className="card card-calendar">
                            <div className="card-body ">
                                {/*<!-- <div id="fullCalendar"></div> --> */}
                                <FullCalendar
                                    plugins={[dayGridPlugin]}
                                    initialView="dayGridMonth"
                                    weekends={true}
                                    events={[
                                        {
                                            title: '6:00 AM Session on Maths',
                                            start: '2020-10-01'
                                        },
                                        {
                                            title: '6:00 AM Session on English',
                                            start: '2020-10-07',
                                            end: '2020-10-10'
                                        },
                                        {
                                            id: 999,
                                            title: '6:00 AM Session on Maths',
                                            start: '2020-09-09'
                                        },
                                        {
                                            id: 999,
                                            title: '6:00 AM Session on Maths',
                                            start: '2020-09-16'
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarComponent;