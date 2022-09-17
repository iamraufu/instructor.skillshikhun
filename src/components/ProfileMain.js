import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import ProfileDetails from './ProfileDetails';

const ProfileMain = ({title}) => {

    const [instructor, setInstructor] = useState({});

    useEffect(()=>{
        fetch(`https://api-skillshikhun.herokuapp.com/instructor/631323e1805ec0b9fa1be005`)
        .then(res => res.json())
        .then(data=> setInstructor(data.result))
    },[])

    console.log(instructor)

    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div className="header-container">
                <Header title={title} />
            </div>

            <div style={{ height: '4vh' }} className=""></div>

            <div className="mx-3 p-3 main-container">
                {/* <PartnerDetails /> */}
                {/* <PartnerServices /> */}
                <ProfileDetails instructor={instructor} />
            </div>

        </section>
    );
};

export default ProfileMain;