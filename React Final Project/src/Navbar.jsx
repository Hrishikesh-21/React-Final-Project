import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
//import Navbar from './Navbar';
import Sports from './Sports';
import Cartoon from './Cartoon';
import Contact from './Contact';

function Navbar() {
  return (
<>
<ul>
<li><Link to="/">Movies</Link></li>
<li> <Link to="/Cartoon">Cartoon</Link></li>
<li><Link to="/sports">Sports</Link></li>
<li><Link to="/contact">Contact </Link></li>

</ul>
{/* <p><Link to="/error">Erorr </Link></p>  <li><a><p><Link to="/error">Error</Link></p></a></li>*/}




    <Route path="/" component={Home} exact />
    <Route path="/Cartoon" component={Cartoon} />
    <Route path="/Sports"component={Sports} />
    <Route path="/contact" component={Contact} />



</>
  );
};
  export default Navbar; 