import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Home() {
    const [movies, setMovies] = useState([])

    // const fetchImages = (images, n = 3) => {
    //     const imgs = []

    //     for(const img in images) {
    //         if(img.primaryImage !== null) {
    //             // imgs.push(img.primaryImage.url)
    //             console.log(img.primaryImage.url)
    //         }
    //     }

    //     // return imgs
    // }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            headers: {
                'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setMovies(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            <section className="slider">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        {
                            movies && movies.map((movie, index) => {
                                if(movie.primaryImage !== null) {
                                    return (
                                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={movie.id}>
                                            <img src={movie.primaryImage.url} className="d-block w-100" alt="..." />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="latest-movies bg-light py-5">
                <div className="container">
                    <h3 className="mb-5 text-center">Latest movies</h3>
                    <div className="row">
                    {
                        movies && movies.map((movie) => <div className="col-lg-3 col-md-4 col-sm-12" key={movie.id} ><MovieCard movie={movie} /></div>)
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home