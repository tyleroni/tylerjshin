import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';
import background from '../../assets/images/Portfolio_Background.png';


const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className = 'page'>
        
            <Outlet />
 
        </div>
    </div>
    )
}

export default Layout