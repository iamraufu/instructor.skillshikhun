import React from 'react';
import CMSMain from '../../components/CMSMain';
import InstructorSidebar from '../../components/InstructorSidebar';

const CMS = () => {
    return (
        <section style={{ padding: '0' }} className='container-fluid'>
            <div style={{ margin: '0' }} className="row">
                <div style={{ minWidth: '180px', padding: '0px' }} className="col-md-2">
                    <InstructorSidebar />
                </div>
                <div style={{ padding: '0px' }} className="col-md-10">
                    <CMSMain title='সি এম এস (কনটেন্ট ম্যানেজমেন্ট সিস্টেম)' />
                </div>
            </div>
        </section>
    );
};

export default CMS;