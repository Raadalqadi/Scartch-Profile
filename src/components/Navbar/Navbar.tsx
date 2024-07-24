import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from '../../pages/Home/Home'; // Import Home page component
import Servies from '../../pages/Servies/Servies'; // Import Services page component
import Project from '../../pages/Project/Project'; // Import Project page component
import './Navbar.css'; // Import CSS file for styling
import Blog from '../../pages/Blog/Blog';
import Pricing from '../../pages/Pricing/Pricing';
import Contact from '../../pages/Conatct/Contact';
import Footer from '../footer/Footer';
import Page404 from '../../pages/404/Page404';

// Define type for Navbar data
type NavData = {
  navData: {
    title: string; // Title of the navbar
    links: string[]; // Array of navigation links
    sign: string[]; // Array of sign-in/sign-up links
  };
  language: Boolean; // Boolean indicating the current language
  setToggle: any; // Function to toggle language
  Data: any; // Data for different pages
}
// Define Fun to scroll top page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to top
  });
};

// Navbar component
export default function Navbar(props: NavData) {
  return (
    <>
      <Router>
        {/* Header section */}
        <header className='header'>
          <div className='logo'>
            {props.navData.title} {/* Render logo/title */}
          </div>
          {/* Navigation menu */}
          <nav className="navbar">
            <ul>
              {/* Render navigation links */}
              <li> <NavLink to={"/"} onClick={scrollToTop}> {props.navData.links[0]} </NavLink> </li>
              <li> <NavLink to={"/Servies"} onClick={scrollToTop} > {props.navData.links[1]} </NavLink> </li>
              <li> <NavLink to={"/Project"} onClick={scrollToTop} > {props.navData.links[2]} </NavLink> </li>
              <li> <NavLink to={"/Blog"} onClick={scrollToTop} > {props.navData.links[3]} </NavLink> </li>
              <li> <NavLink to={"/Pricing"} onClick={scrollToTop} > {props.navData.links[4]} </NavLink> </li>
              <li> <NavLink to={"/Contact"} onClick={scrollToTop} > {props.navData.links[5]} </NavLink> </li>
            </ul>
          </nav>
          {/* Sign-in/sign-up section */}
          <div className='login'>
            <Link to={"/Contact"}> <button className='lets_start'>{props.navData.sign[1]}</button></Link> {/* Render sign-up link */}
            <button onClick={props.setToggle}> {props.language ? "EN" : "AR"}</button> {/* Button to toggle language */}
          </div>
        </header>
        {/* Routes for different pages */}
        <Routes>
          <Route path='/' element={<Home home={props.Data.home} />} /> {/* Route for Home page */}
          <Route path='/Servies' element={<Servies servies={props.Data.servies} />} /> {/* Route for Services page */}
          <Route path='/Project' element={<Project project={props.Data.project} />} /> {/* Route for Project page */}
          <Route path='/Blog' element={<Blog blogs={props.Data.blog} />} /> {/* Route for Blog page */}
          <Route path='/Pricing' element={<Pricing pricing={props.Data.pricing} />} /> {/* Route for Blog page */}
          <Route path='/Contact' element={<Contact contact={props.Data.contact} />} /> {/* Route for Blog page */}
          <Route path='*' element={<Page404 />}></Route>
        </Routes>

      </Router>
      <Footer footer={props.Data.footer} />
    </>
  )
}
