import React from 'react';
import Header from './Header';

const LearnerMain = ({ title }) => {
    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div className="header-container">
                <Header title={title} />
            </div>

            <div style={{ height: '4vh' }} className=""></div>

            <div className="mx-3 p-3 main-container">
                {/* <PartnerDetails /> */}
                {/* <PartnerServices /> */}
            </div>

        </section>
    );
};

export default LearnerMain;