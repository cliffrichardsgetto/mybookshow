/*import logo from './logo.svg'; */
import './App.css';
import  {Routes, Route} from "react-router-dom";


// react  slick  css


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// pages
import  PlayPage  from './pages/Play.page';
import  MoviePage  from './pages/Movie.page';
import  HomePage  from './pages/Home.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<PlayPage/>} />

    </Routes>
   // <div> 
     // <h1 class="text-3xl font-bold underline">React </h1>
   // </div>

   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App; 