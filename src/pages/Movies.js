import React, { useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

function Movies() {
    const [title, setTitle] = useState()
    const [releaseYear, setReleaseYear] = useState()
    const [movies, setMovies] = useState()
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        headers: {
            'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    const searchByTitle = (e) => {
        setReleaseYear(undefined)
        setTitle(e.target.value)

        switch(e.keyCode) {
            case 13:
                axios.request(options).then(function (response) {
                    const sMovies = response.data.results.filter(movie => movie.titleText.text.includes(title) )
                    setMovies(sMovies)
                    e.target.value = ''
                }).catch(function (error) {
                    console.error(error);
                });
                break;
        }
    }

    const searchByReleaseYear = (e) => {
        setTitle(undefined)
        setReleaseYear(e.target.value)

        switch(e.keyCode) {
            case 13:
                axios.request(options).then(function (response) {
                    const sMovies = response.data.results.filter(movie => movie.releaseYear.year == releaseYear)
                    setMovies(sMovies)
                    e.target.value = ''
                }).catch(function (error) {
                    console.error(error);
                });
                break;
        }
    }

    return (
        <>
            <section className="search py-4">
                <div className="container d-flex justify-content-between gap-4">
                    <input type="text" placeholder='Enter movie title' onKeyUp={searchByTitle} className="form-control" />
                    <input type="text" placeholder='Enter release year' onKeyUp={searchByReleaseYear} className="form-control" />
                </div>
            </section>
            <section className="movies bg-light py-4">
                <div className="container">
                    {(movies && movies.length > 0) ? <h2 className="text-center mb-4">
                        Search results for {title && title}{releaseYear && releaseYear}
                    </h2> : (movies !== undefined ? <h2>No results were found!</h2> : '')}
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

export default Movies