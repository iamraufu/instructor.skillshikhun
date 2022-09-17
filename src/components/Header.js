import React from 'react';
import HeaderProfile from './HeaderProfile';
import RouteTitle from './RouteTitle';

const Header = ({ title }) => {
    return (
        <div className="d-flex justify-content-between align-items-center py-3">
            <RouteTitle title={title} />
            <HeaderProfile />
        </div>
    );
};

export default Header;