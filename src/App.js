import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./pages/About";
import Contact2 from "./pages/Contact2";
import Error from "./pages/Error";
import Services from "./pages/Services";
const App = () =>{
return(
<>
<Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/contact2" element={<Contact2/>}></Route>
<Route path="/services" element={<Services/>}></Route>
<Route path="*" element={<Error/>}></Route>
</Routes>
</>
)
}
export default App;
