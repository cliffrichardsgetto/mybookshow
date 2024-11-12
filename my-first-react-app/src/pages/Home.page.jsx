import  React, {useEffect, useState} from  'react';
import axios from "axios";

import DefaultLayoutHoc from "../layout/Default.layout";
//import /DefaultLayoutHoc from './layout/default.layout';
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard.Component";

//import EntertainmentCardslider from '../Components/Entertainment/EntertainmentCardComponent';

const HomePage =() => {
    const [recommendedMovies,setRecommendedMovies] = useState([]);
    const [premierMovies,setPremierMovies] = useState([]);
    const [onlineStreamEvents,setOnlineStreamEvents] = useState([]); 
    
    //get apiname
    useEffect(() => {
      const requestPopularMovies =async () => {
        const getPopularMovies = await axios.get(
       //   "https://api.themoviedb.org/3/movie/top_rated?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
         "/movie/popular"
          
        );
        setPremierMovies(getPopularMovies.data.results);
      };
      requestPopularMovies();
    },[]);

    useEffect(() => {
      const requestTopRatedMovies =async () => {
        const getTopRatedMovies = await axios.get(
     //   "https://api.themoviedb.org/3/movie/top_rated?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
         "/movie/top_rated"
        
        );
        setRecommendedMovies(getTopRatedMovies.data.results);
      };
      requestTopRatedMovies();
    },[]);
    useEffect(() => {
      const requestUpcomingMovies =async () => {
        const getUpcomingMovies = await axios.get(
       //   "https://api.themoviedb.org/3/movie/top_rated?api_key=ccfa4ecd270cd9e26cc5791a495b5aca"
         "/movie/upcoming"
          
        );
        setOnlineStreamEvents(getUpcomingMovies.data.results);
      };
      requestUpcomingMovies();
    },[]);


   
   
   
   // setRecommendedMovies(getTopRatedMovies.data.results);
   // };
   // requestTopRatedMovies();
 // },[]);
    
   
    return (
  //      <HeroCarousel/>
    //    <div className='container mx '
    //    <h1 className="The  best  of  Entertainment"</h1>


        <>
        <HeroCarousel />

        <div className="container mx-auto px-4 md:px-12 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
             The best of Entertainment
           </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Recommended Movies"
            subtitle="List of recommonded movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="bg-premier-800 py-12">
         <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
           <div className="hidden md:flex">
             <img
               src=""
               alt="Rupay"
               className="w-full h-full"
             />
           </div>
           <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};


 //   )

   // <PosterSlider
    //   title="Recomended Movies"
    //   subject="List  of  recommended Movies"
     //  posters={recommendedMovies}
     //  isDark={false}
     //  </>

   // </div>

   // <div className="bg-premier-80b py-12">
     //   <div className="container mx">
       //     <div className="hidden md:flex">
        //    <img
         //   src=' '
          //  alt="Rupay"
           // className="w=full h-"

           // </div>
        //</div>
   // </div>

         
//export default Homepage;
export default DefaultLayoutHoc(HomePage);