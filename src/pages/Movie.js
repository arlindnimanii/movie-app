import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Rating from '../components/Rating'

function Movie() {
    const [movie, setMovie] = useState()
    const {id} = useParams()
    const noimage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/'+id,
            headers: {
              'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
          
        axios.request(options).then(function (response) {
            setMovie(response.data.results)
        }).catch(function (error) {
            console.error(error)
        });
    }, [])

    return (
        <div className="container my-5">
            {movie && (
                <>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" style={{height: '220px'}} />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <h5 className="card-title">{movie.titleText.text}</h5>
                            <p>Release year: {movie.releaseYear.year}</p>
                        </div>
                    </div>
                    <Rating id={movie.id} />
                </>
            )}
        </div>
    )
}

export default Movie