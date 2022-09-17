import React from 'react';
import '../styles/Sidebar.css';
import sidebarData from '../data/sidebarData.json';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <div className='sidebar'>
                <div className='sidebar__content'>

                    <div className='sidebar__header'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='img-fluid mx-auto d-block py-3' width={100} />
                        </Link>
                    </div>

                    <div className='sidebar__content'>
                        <div className='sidebar__sidebar'>
                            <ul className='sidebar__sidebar__list'>
                                {
                                    sidebarData.map((item) => {
                                        return (
                                            <li className='sidebar__sidebar__item' key={item.id}>
                                                <Link className='sidebar__sidebar__link' to={item.link}>
                                                    {item.item}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;