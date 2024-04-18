import React from "react";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Homeitwork from "./Homeitwork";
import Navbar from "./Navbar";
import Service from './Service';
const Home = () =>{
return(
<>
<Navbar/>
<Header/>
<Homeitwork/>
<Service/>
<Aboutus/>
<Contact/>
<Footer/>
</>
)
}
export default Home;