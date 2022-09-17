import React from 'react';
import '../styles/InstructorSidebar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import dashboardImage from '../images/dashboard.svg';
import courseImage from '../images/course.svg';
import cmsImage from '../images/cms.svg';
import learnerImage from '../images/learner.svg';

const InstructorSidebar = () => {

    const navigate = useNavigate();

    return (
        <nav style={{ minHeight: '100vh', borderRight: '1px solid #eaeaea', backgroundColor: '#18113c' }}>
            <Link to='/'><img className='img-fluid mx-auto d-block py-3' width={150} src={logo} alt="logo" /></Link>

            <div style={{ borderBottom: '1px solid lightgrey' }} className="mx-4"></div>

            <div className="mt-5">
                <div onClick={() => {
                    navigate('/dashboard')
                    window.scrollTo(0, 0);
                }} 
                className="p-2 text-center d-flex justify-content-center align-items-center instructor_sidebar">
                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#ca4570' : '',
                        borderRadius: isActive ? '5px' : ''
                    })} to='/dashboard' className='text-decoration-none text-white p-2'>
                        <img className='img-fluid me-2' width={30} src={dashboardImage} alt='ড্যাশবোর্ড' /> ড্যাশবোর্ড
                    </NavLink>
                </div>

                <div onClick={() => {
                    navigate('/courses')
                    window.scrollTo(0, 0);
                }} className="p-2 text-center d-flex justify-content-center align-items-center instructor_sidebar">
                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#ca4570' : '',
                        borderRadius: isActive ? '5px' : ''
                    })} to='/courses' className='text-decoration-none text-white p-2'>
                        <img className='img-fluid me-2' width={30} src={courseImage} alt='কোর্স সমূহ' /> কোর্স সমূহ
                    </NavLink>
                </div>

                <div onClick={() => {
                    navigate('/cms')
                    window.scrollTo(0, 0);
                }} className="p-2 text-center d-flex justify-content-center align-items-center instructor_sidebar">
                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#ca4570' : '',
                        borderRadius: isActive ? '5px' : ''
                    })} to='/cms' className='text-decoration-none text-white p-2'>
                        <img className='img-fluid me-2' width={30} src={cmsImage} alt='সিএমএস' /> সিএমএস
                    </NavLink>
                </div>

                <div onClick={() => {
                    navigate('/learners')
                    window.scrollTo(0, 0);
                }} className="p-2 text-center d-flex justify-content-center align-items-center instructor_sidebar">
                    <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                        color: isActive ? '#f8f9fa' : '#434257',
                        background: isActive ? '#ca4570' : '',
                        borderRadius: isActive ? '5px' : ''
                    })} to='/learners' className='text-decoration-none text-white p-2'>
                        <img className='img-fluid me-2' width={30} src={learnerImage} alt='লার্নার' /> লার্নার
                    </NavLink>
                </div>
            </div>



            {/* <div className="mt-5">
                {
                    sidebarData.map(menu =>
                        <div className="p-3 text-center">
                            <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => ({
                                color: isActive ? '#f8f9fa' : '#434257',
                                background: isActive ? '#ca4570' : '',
                                borderRadius: isActive ? '5px' : ''
                            })} to={menu.route} className='text-decoration-none text-white p-2'>
                               <img src={dashboardImage} alt={menu.item} /> {menu.item}
                            </NavLink>
                        </div>
                    )
                }
            </div> */}




            {/* <div
                style={{ position: 'absolute', bottom: '0', left: '60px' }}
                className='p-3 mb-5 text-white'>
                লগ আউট
            </div> */}

        </nav>
    );
};

export default InstructorSidebar;