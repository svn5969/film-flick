import React from 'react';
import yearTopMovie from '../../../images/movie3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './YearTopMovieBanner.css';

const YearTopMovieBanner = () => {
    const topMovie = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),url(${yearTopMovie})`,
    }
    
    return (
        <div data-testid="top-movie" className="year-top-movie" style={topMovie}>
            <div className="container pad-topMovie">
                <div className="d-md-flex align-items-center">
                    <div className="col-12 col-md-6 p-0 marginTop">
                        <h1 className="mb-2 text-uppercase text-white font-weight-bold">Horrible Dinosaur</h1>
                        <span className="text-white ml-3">4.5 (lmdb)</span>
                        <div className="d-flex align-items-center pb-2 mt-3">
                            <div className="badge badge-secondary p-1">13+</div>
                            <span className="ml-3 text-white">2hr : 32mins</span>
                        </div>
                        <div className="text-white mt-4">
                            <h4 className="font-weight-bold">Movie of the year</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil nostrum expedita, minus perspiciatis tenetur earum mollitia blanditiis odit maxime aliquid hic modi molestias illo eum deserunt ipsum praesentium reprehenderit!</p>
                        </div>
                        <div className="card-btn mt-5">
                            <a href="/" className="btn btn-style px-4">
                                <FontAwesomeIcon icon={faPlay} />
                                <span className="ml-2">Play Now</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 p-0">
                        <div className="top-card-movie">
                            <img src={yearTopMovie} alt="topMovie" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearTopMovieBanner;