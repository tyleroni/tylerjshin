import { Link } from "react-router-dom";
import './index.scss';
//import { background } from '../src/assets/images/Portfolio_Background.png';

const Home = () => {
    return (
            <div className="container home-page">
                <div className="text-zone">
                    <h1 className = "text-zone text-zone2">Hi, </ h1>
                    <br /> 
                    <h1 className= 'text-zone text-zone3'>I'm Tyler Shin,</h1>
                    <br />
                    <h1 className='text-zone text-zone4'>Web Developer
                    </h1>                
                    <h2>Frontend Developer / UI/UX Designer / Product Designer</h2>
                    <Link to ='/contact' className = 'flat-button'>CONTACT ME</Link>
                </div>
            </div>
    );
}

export default Home