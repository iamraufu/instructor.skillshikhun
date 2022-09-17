import React, { useState } from 'react';
import DashboardMain from '../../components/DashboardMain';
import InstructorSidebar from '../../components/InstructorSidebar';
import menuImage from '../../images/menu.svg';

const Dashboard = () => {

    const [mainClass, setMainClass] = useState('col-md-10');
    const [show, setShow] = useState(true);

    const visibility = () => {
        if (show === true) {
            document.getElementById('instructor_sidebar').style.display = 'none';
            setMainClass('col-md-12')
            setShow(false);
        }
        else {
            document.getElementById('instructor_sidebar').style.display = 'block';
            setMainClass('col-md-10');
            setShow(true);
        }
    }

    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{ margin: '0' }} className="row">
                <div id='instructor_sidebar' style={{ minWidth: '180px', padding: '0px' }} className="col-md-2">
                    <InstructorSidebar />
                </div>
                <div style={{ padding: '0px' }} className={mainClass}>
                    <img onClick={() => visibility()} width={35} className='img-fluid m-2' style={{ position: 'absolute', cursor: 'pointer' }}  src={menuImage} alt="" />
                    <DashboardMain title='ড্যাশবোর্ড' />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;