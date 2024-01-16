import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Tyler_Shin_white.png'
import IconL from '../../assets/images/linkedin.png'
import closeIcon from '../../assets/images/Close_button.png'
import expandIcon from '../../assets/images/Expand_button.png'
import minimizeIcon from '../../assets/images/Minimize_button.png'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='logo' to = '/'>
            <img src={LogoS} alt="Tyler Shin" />
        </Link>
        <div className='control-tab'>
            <Link className='window-icon' to = '/'>
                <img src={minimizeIcon} alt="Windows Minimize Icon" width = '2%' height = 'auto'/>
            </Link>
            <Link className='window-icon' to = '/'>
                <img src={expandIcon} alt="Windows Expand Icon" width = '2.05%' height = 'auto'/>
            </Link>
            <Link className='window-icon close-icon' to = '/'>
                <img src={closeIcon} alt="Windows Close Icon" width = '2%' height = 'auto'/>
            </Link>
        </ div>
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