import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
    const noimage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'


    return (
        <div className="card mb-3" style={{height: '310px'}}>
            <img src={movie.primaryImage !== null ? movie.primaryImage.url : noimage} className="card-img-top" style={{height: '220px'}} />
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{movie.titleText.text}</h5>
                <Link to={`/movies/${movie.id}`} className="btn btn-outline-primary">Details</Link>
            </div>
        </div>
    )
}

export default MovieCard