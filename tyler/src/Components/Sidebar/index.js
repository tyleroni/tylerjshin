import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Tyler_Shin_white.png'
import IconL from '../../assets/images/linkedin.png'


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to = '/'>
            <img src={LogoS} alt="Tyler Shin" />
        </Link>
        <nav className = 'nav-bar2'>
            <ul>
                <li className='active'>
                    <a href='/home' className = 'active'>Home</a>
                </li>
                <li>
                    <a href='/projects' className = 'active'>Projects</a>
                </li>
                <li>
                    <a href='/about' className = 'active'>About Me</a>
                </li>
                <li>
                    <a href='/contact' className = 'active'>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Sidebar

//<ul>
//            <li>
//                <a target = '_blank' rel = "noreferrer" href="www.linkedin.com/in/tylerjshin">
//                    <img src = {IconL} alt="Tyler Shin Linkedin" />
//                </a>
//            </li>
//        </ul>