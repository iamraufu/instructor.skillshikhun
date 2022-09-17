import React from 'react';
import CourseMain from '../../components/CourseMain';
import InstructorSidebar from '../../components/InstructorSidebar';

const Courses = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{ margin: '0' }} className="row">
                <div style={{ minWidth: '180px', padding: '0px' }} className="col-md-2">
                    <InstructorSidebar />
                </div>
                <div style={{ padding: '0px' }} className="col-md-10">
                    <CourseMain title='কোর্স সমূহ' />
                </div>
            </div>
        </section>
    );
};

export default Courses;