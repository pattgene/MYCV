import profile from './img/profile.jpg';
import './App.css';
import AboutMe from './component/AboutMe';
import Experience from './component/Experience';
import Research from './component/Research';
import Contact from './component/Contact';
import Project from './component/Project';
import { IoIosPerson } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaAt } from "react-icons/fa";
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';

function App() {
  const onButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + "./pdf/test.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "test.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <body className="app-container">
          <div className='menu'>
            <ul>
              <li><NavLink to='/'><IoIosPerson size={25}/>About</NavLink></li>
              <li><NavLink to='/experience'><IoNewspaper size={25}/>Experience</NavLink></li>
              <li><NavLink to='/research'><LuPencilLine size={25}/>Research</NavLink></li>
              <li><NavLink to='/project'><AiOutlineFundProjectionScreen size={25}/>Project</NavLink></li>
              <li><NavLink to='/contact'><FaAt size={25}/>Contact</NavLink></li>
            </ul>
          </div>
          <div className='card-profile'>
            <div className='img-profile'>
              <img src={profile} alt="Profile"/>
            </div>
            <h3 className='profile-name'>Patt PHURTVILAI</h3>
            <div className='card-bottom'>
              <NavLink onClick={onButtonClick}>Download CV</NavLink>
            </div>
          </div>
          <div className='card-info'>
            <Routes>
              <Route path='/' element={AboutMe}/>
              <Route path='/experience' element={Experience} />
              <Route path='/research' element={Research} />
              <Route path='/project' element={Project} />
              <Route path='/contact' element={Contact} />
            </Routes>
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
