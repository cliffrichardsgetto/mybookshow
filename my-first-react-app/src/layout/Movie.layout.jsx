import React from "react"; 
import MovieNavbar from "../Components/MovieNavbar.component";


const MovieLayoutHoc =
(Component) =>
({...props}) =>
{
   return <div>
       <MovieNavbar/>
       <Component {...props}/>
       <div>Footer</div>
       </div>
//    <div>MovieLayoutHoc</div>
    
};

export default MovieLayoutHoc;
