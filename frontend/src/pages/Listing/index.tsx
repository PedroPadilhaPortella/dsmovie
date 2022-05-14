import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Movie, MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './styles.css';

function Listing() {

    const [pageNumber, setPageNumber] = useState(1);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=10&page=${pageNumber}`)
            .then(res => {
                const data = res.data as MoviePage;
                setPage(data);
            })
    }, [pageNumber]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Listing;