import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { BASE_URL } from 'utils/requests';
import './styles.css';

function Listing() {

    axios.get(`${BASE_URL}/movies`).then(res => {
        console.log(res.data);
    })

    return (
        <>
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