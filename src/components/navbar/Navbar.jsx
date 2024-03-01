// Importing the SCSS file for styling
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


// Defining the Navbar component
const Navbar = () => {
    return (
        // JSX representing the Navbar component
        <div className="navbar">
            <Sidebar/>
           <div className="wrapper">
               <motion.span  initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transiton={{duration:0.5}}>Miftahul Islam</motion.span>
               <div className="social">
                 <a href="#"><img src="/facebook.png" alt=""/></a>
                 <a href="#"><img src="/instagram.png" alt=""/></a>
                 <a href="#"><img src="/youtube.png" alt=""/></a>
                 <a href="#"><img src="/dribbble.png" alt=""/></a>
               </div>
               
           </div>
        </div>
    );
};

// Exporting the Navbar component
export default Navbar;
