import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../images/Brother-innovation.jpg';
export const Nav = () => {
    const auth= localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        navigate('/signup');
        localStorage.clear();
    }
    return(
        <div>
            <img src={logo} width="150" height="150" alt="logo"/>
           {auth ? <ul className='nav-ul'>
                    <li><Link to = "/"> Products</Link></li> 
                    <li><Link to = "/add"> Add Products</Link></li> 
                    <li><Link to = "/update"> Update Products</Link></li>
                    <li><Link to = "/profile"> Profile</Link></li>
                    <li><Link onClick={logout} to = "/signup"> Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
            : <>
                <ul className='nav-ul nav-right'>
                    <li><Link to = "/signup"> Sign Up</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                </ul>
             </>
            }
        </div>
    )
}
// export default Nav;