import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
                 <h1>Welcome my react router project</h1>
            <nav className="header">
                <CustomLink className="link" to='/'>Home</CustomLink>
              
                <CustomLink className="link" to='/friends'>Friends</CustomLink>
                <CustomLink className="link" to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;