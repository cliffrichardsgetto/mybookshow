import React from "react"; 
//import Navbar from "../Components/Navbar.component";
import Navbar from "../Components/Navbar.component";

const DefaultLayoutHoc =
(Component) =>
({...props}) =>
{
   return (
    <div>
       <Navbar/>
       <Component {...props}/>
      <div>Footer</div>
       </div>
   // <div>DefaultLayoutHoc</div>
    );
};

export default DefaultLayoutHoc;

