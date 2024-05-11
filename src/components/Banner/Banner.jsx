import React, {useEffect, useState} from 'react';
import requests from '../../utils/requests';
import './banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Banner () {

    console.log(requests.reqNowPlayingMovies)

    const [nowPlaying, setNowPlaying] = useState([]) 

    useEffect(() => {
        fetch(requests.reqNowPlayingMovies)

        .then ((response)=>response.json())
        .then ((data)=>{
            console.log(data.results[Math.floor(Math.random()*data.results.length)])
            setNowPlaying(data.results[Math.floor(Math.random()*data.results.length)])
        })
        .catch(error => {
                throw(error);
        })
    }, []);

    function truncate (str, n){
        return str?.length > n? str.substr(0, n-1)+'...':str;
    }

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${nowPlaying?.backdrop_path})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div className="banner_desc">
                <div className="banner_title">
                    {nowPlaying?.title||nowPlaying?.name}
                </div>
                <div className="banner_overview">
                    {truncate(nowPlaying?.overview, 150)}
                    {/* {((nowPlaying.overview).length) > 150? "a" : "b"} */}
                </div>
                <div className="banner_buttons">
                    <button className ="play_button">< i PlayArrowIcon />Play </button>
                    <button className="info_button"><i InfoOutlinedIcon/>More info</button>
                </div>
            </div>

        </div>
    );
}

export default Banner;
