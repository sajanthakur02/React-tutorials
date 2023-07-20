import React from 'react';
import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom';
export const Nav = () => {
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to = "/"> Products</Link></li> 
                <li><Link to = "/add"> Add Products</Link></li> 
                <li><Link to = "/update"> Update Products</Link></li>
                <li><Link to = "/"> Logout</Link></li>
                <li><Link to = "/"> Profile</Link></li>
            </ul>
        </div>
    )
}
// export default Nav;