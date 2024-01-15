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
//<div className = 'background' style = {{backgroundImage: 'url(${require("Portfolio_Background.png")}', 
  //          backgroundSize: "cover",
    //        height:'100%', 
      //      width: '100%',
        //    }}></div>
//            <span className = 'tags top-tags'>&lt;&gt;</span>
//
//            <span className='tags bottom-tags'>
 //           &lt;&gt;
//            <br />
 //           <span className ='bottom-tag-html'>&lt;&gt;</span>
//            </span>