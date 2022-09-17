import React from 'react';

const SalesReport = ({ sales }) => {

    // set date as day-month-year
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const date = formatTime(year) + "-" + formatTime(month) + "-" + formatTime(day);
    function formatTime(time) {
        return time < 10 ? (`0${time}`) : time;
    }

    const revenue = sales.reduce((a, b) => a + parseInt(b.amount), 0) * 0.4
    const thisMonthStudents = sales.filter(student => student.purchased.slice(5, 7) === date.slice(5, 7))
    const thisMonthRevenue = thisMonthStudents.reduce((a, b) => a + parseInt(b.amount), 0) * 0.4

    return (
        <section className='container'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3">
                    <h1 style={{ backgroundColor: '#efefef', width: '200px', borderRadius: '10px', border: '1px solid lightgrey', borderBottom: '3px solid tomato' }} className='fs-2 text-center p-2 fw-bold'>{sales.length} জন<br /><span className='fs-6 text-muted'>মোট লার্নার্স</span></h1>
                </div>

                <div className="col-sm-3">
                    <h2 style={{ backgroundColor: '#efefef', width: '200px', borderRadius: '10px', border: '1px solid lightgrey', borderBottom: '3px solid goldenrod' }} className='fs-2 text-center p-2 fw-bold'>{revenue} টাকা<br /><span className='fs-6 text-muted'>মোট আয়</span></h2>
                </div>

                <div className="col-sm-3">
                    <h2 style={{ backgroundColor: '#efefef', width: '200px', borderRadius: '10px', border: '1px solid lightgrey', borderBottom: '3px solid pink' }} className='fs-2 text-center p-2 fw-bold'>{thisMonthStudents.length} জন<br /><span className='fs-6 text-muted'>এই মাসে ভর্তি</span></h2>
                </div>

                <div className="col-sm-3">
                    <h2 style={{ backgroundColor: '#efefef', width: '200px', borderRadius: '10px', border: '1px solid lightgrey', borderBottom: '3px solid purple' }} className='fs-2 text-center p-2 fw-bold'>{thisMonthRevenue} টাকা<br /><span className='fs-6 text-muted'>এই মাসে আয়</span></h2>
                </div>
            </div>
        </section>
    );
};

export default SalesReport;