import React, {useEffect, useState} from 'react';
import './row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { NoEncryption } from '@mui/icons-material';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row ({Title, request, isLargeRow}) {
        const [movies, setMovies] = useState([]) 
        const [trailerUrl, setTrailerUrl] = useState()

    useEffect(() => {
        fetch(request)

        .then ((response)=>response.json())
        .then ((data)=>{
            // console.log(Title)
            // console.log(data.results)
            setMovies(data.results)
        })
        .catch(error => {
                throw(error);
        })
    }, [request]);

    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl('')
        }
        else {
            movieTrailer( movie?.name || movie?.title || movie?.original_name)
            .then((url) =>{
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            })
        }
    }

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {autoplay:1}
    }

    return (
        <div>
            <div className ="row_title"><h3>{Title}</h3></div>
            <div className = "poster_container">
                    {movies?.map(movie => (
                        <div  key={movie.id} className="poster_items">
                            <img 
                            onClick={()=>handleClick(movie)}
                            src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                            alt={movie.name}
                            className={(isLargeRow) ?'poster_item_large':'poster_item'}/>
                        </div>
                ))}
            </div>  
            <div >
                {trailerUrl?<YouTube videoId={trailerUrl} opts={opts}/>:<div style={{display:"none"}}></div>}
            </div>
        </div>
    );
}

export default Row;

