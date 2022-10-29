import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/DashboardMain.css';
import Header from './Header';
// import SalesChart from './SalesChart';
// import SalesReport from './SalesReport';

const DashboardMain = ({ title }) => {
    // eslint-disable-next-line
    const [sales, setSales] = useState([]);

    useEffect(()=>{
        fetch(`https://api-skillshikhun.herokuapp.com/get-payments/Live/Web Development`)
        .then(res => res.json())
        .then(data => setSales(data))
    },[])

    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div className="header-container">
                <Header title={title} />
            </div>

            <div style={{ height: '4vh' }} className=""></div>

            <div className="mx-3 p-3 main-container">
                {/* <SalesReport sales={sales} /> */}
                {/* <SalesChart /> */}
            </div>

        </section>
    );
};

export default DashboardMain;