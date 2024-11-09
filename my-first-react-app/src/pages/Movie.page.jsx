import  React from  'react';
import MovieLayoutHoc from '../layout/Movie.layout';

const Moviepage =() => {
    return (
        <div>MoviePage</div>
    )
}
//export default Moviepage;
export default MovieLayoutHoc(Moviepage);