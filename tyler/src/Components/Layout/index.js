import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

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

//            <span className = 'tags top-tags'>&lt;&gt;</span>
//
//            <span className='tags bottom-tags'>
 //           &lt;&gt;
//            <br />
 //           <span className ='bottom-tag-html'>&lt;&gt;</span>
//            </span>