import React from 'react';
import '../styles/Menubar.css';
import sidebarData from '../data/sidebarData.json';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="menubar-container ">
            <section className='menubar'>

                <div className='container-fluid fixed-bottom menubar-items'>
                    {
                        sidebarData.map(item =>
                            <div key={item.id} className="">
                                <Link to={item.route} className='text-decoration-none text-white'>{item.item}</Link>
                            </div>

                        )}
                </div>

            </section>
        </div>
    );
};

export default Menubar;