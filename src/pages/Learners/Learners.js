import React from 'react';
import InstructorSidebar from '../../components/InstructorSidebar';
import LearnerMain from '../../components/LearnerMain';

const Learners = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{ margin: '0' }} className="row">
                <div style={{ minWidth: '180px', padding: '0px' }} className="col-md-2">
                    <InstructorSidebar />
                </div>
                <div style={{ padding: '0px' }} className="col-md-10">
                    <LearnerMain title='লার্নার' />
                </div>
            </div>
        </section>
    );
};

export default Learners;