import './App.scss';
import { Routes, Route, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import background from '../src/assets/images/Portfolio_Background.png';

function App() {
  return (
    <>

        <Routes>
          <Route path = "/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path = '/projects' element = {<Projects />} />
            <Route path = '/contact' element = {<Contact />} />
          </Route>
        </Routes> 
      
    </>
  );
}

export default App
