import './App.scss';
import { Routes, Route, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import MindTreasure from './Components/MindTreasure'
import Impromptu from './Components/Impromptu'
import QuickFit from './Components/QuickFit'
import SugarCube from './Components/SugarCube'
import background from '../src/assets/images/Portfolio_Background.png';

function App() {
  return (
    <>

        <Routes>
          <Route path = "/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path = '/projects' element = {<Projects />} />
            <Route path = '/contact' element = {<Contact />} />
            <Route path = '/mind/treasure/case/study' element = {<MindTreasure />} />
            <Route path = '/impromptu/case/study' element = {<Impromptu />} />
            <Route path = '/quickfit/case/study' element = {<QuickFit />} />
            <Route path = '/sugarcube/case/study' element = {<SugarCube />} />
          </Route>
        </Routes> 
      
    </>
  );
}

export default App
