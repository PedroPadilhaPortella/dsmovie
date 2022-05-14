import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './styles.css';

function Listing() {

    const [movies, setMovies] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies`).then(res => {
            console.log(res.data);
            const data = res.data as MoviePage;
            setMovies(data.numberOfElements);
        })
    }, []);



    return (
        <>
            <p>{movies}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;