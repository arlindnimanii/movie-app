import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Rating({id}) {
    const [rating, setRatig] = useState()
    const noimage = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/'+id+'/ratings',
            headers: {
                'X-RapidAPI-Key': 'f9ae788bf8mshede405325dc269ap12404cjsn850556a3187e',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
          
        axios.request(options).then(function (response) {
            setRatig(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="my-5">
            {rating !== null && (
                <>
                    <h3>Rating</h3>
                    <p>{rating && rating.averageRating}</p>
                </>
            )}
        </div>
    )
}

export default Rating