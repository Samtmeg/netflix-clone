import React from 'react';
import requests from '../../../utils/requests';
import Row from '../Row/Row';

function RowList () {
    return (
        <div>
            <Row Title = "Trending Movies" request = {requests.reqTMBDtrending} isLargeRow = {false}/>
            <Row Title = "Netflix Originals" request = {requests.reqNetflixOriginals} isLargeRow = {true} />
            <Row Title = "Now Playing in Theatres" request = {requests.reqNowPlayingMovies} />
            <Row Title = "Popular Movies" request = {requests.reqPopularMovies} />
            <Row Title = "Upcoming Movies" request = {requests.reqUpcomingMovies} />
            <Row Title = "Top rated Movies" request = {requests.reqTopRatedMovies} />
            <Row Title = "Action Movies" request = {requests.reqActionMovies} />
            <Row Title = "Comedy Movies" request = {requests.reqComedyMovies} />
            <Row Title = "Horror Movies" request = {requests.reqHorrorMovies} />
            <Row Title = "Romance Movies" request = {requests.reqRomanceMovies} />
            <Row Title = "Documentaries" request = {requests.reqDocumentaries} />
            <Row Title = "Popular TV Shows" request = {requests.reqPopularTvShows} />
        </div>
    );
}

export default RowList;
