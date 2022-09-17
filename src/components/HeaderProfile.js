import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoutImage from '../images/logout.svg';
import webImage from '../images/web.svg';

const HeaderProfile = () => {

    const navigate= useNavigate();

    return (
        <div className='profile-image me-3' style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
            <img style={{ borderRadius: '50%' }} width={40} className='img-fluid mx-auto d-block profile-image' src='https://avatars.githubusercontent.com/u/43452776?v=4' alt="user" />

            {/* Custom Dropdown */}
            <div id='profile-dropdown'>
                {/* Profile Data from API */}
                <img style={{ borderRadius: '50%' }} width={80} className='img-fluid mx-auto d-block py-3' src='https://avatars.githubusercontent.com/u/43452776?v=4' alt="user" />
                <h2 className='fs-5 text-white text-center'>ইফতিখার রহমান</h2>
                <h2 className='fs-6 text-white text-center'><small>ইন্সট্রাক্টর</small></h2>
                <button onClick={()=> navigate('/profile')} className='profile-dropdown-button'>প্রোফাইল দেখুন</button>

                <div style={{ borderBottom: '1px solid #efefef' }} className="mx-4"></div>

                <a href="https://skillshikhun.com" target='_blank' rel="noopener noreferrer" className='text-white text-decoration-none d-flex justify-content-center align-items-center pt-3'><img width={20} className='img-fluid me-2' src={webImage} alt="web" />ওয়েবসাইট ভিজিট করুন</a>

                <button className='profile-dropdown-logout-button d-flex justify-content-center align-items-center'><img width={20} className='img-fluid me-2' src={logoutImage} alt="logout" /> লগ আউট</button>
            </div>

        </div>
    );
};

export default HeaderProfile;