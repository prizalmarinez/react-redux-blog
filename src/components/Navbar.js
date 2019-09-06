import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="ui menu">
                <div className="item header">
                    React Redux Blog
                </div>
                <div className="item right">
                    <a href="https://github.com/prizalmarinez?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i className="icon github">
                        </i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;