import React from 'react';
// import CourseModule from './CourseModule';
import CourseVideoUpload from './CourseVideoUpload';
import Header from './Header';

const CourseMain = ({ title }) => {
    return (
        <section style={{ backgroundColor: '#efefef', minHeight: '100vh' }}>
            <div className="header-container">
                <Header title={title} />
            </div>

            <div style={{ height: '4vh' }} className=""></div>

            <div className="mx-3 p-3 main-container">
                <CourseVideoUpload />
                {/* <CourseModule /> */}
            </div>

        </section>
    );
};

export default CourseMain;