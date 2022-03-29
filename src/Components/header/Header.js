import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
//amara ancor tag a use kori ni karon ayti use korly page puro ti load hoi tar jonno say ti use kori nai  jayhatu amr single page application korty say
//Link use kori nai karon ara jay link ta active say ta dakai ty shai si tar jonno amr akta componant toi ri koray si 
    return (
        <div>
                 <h1>Welcome my react router project</h1>
            <nav className="header">

     
                <CustomLink className="link" to='/'>Home</CustomLink> 
              
                <CustomLink className="link" to='/friends'>Friends</CustomLink>
                <CustomLink className="link" to='/posts'>Posts</CustomLink>
                <CustomLink className="link" to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;