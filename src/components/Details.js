import axios from "axios";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import MovieDetails from "./MovieDetails";
import TvDetails from "./TvDetails";
import PersonDetails from "./PersonDetails"
const Details = () => {
 let {id,type} = useParams()
 const [details, setDetails] = useState();
 const [error, setError] = useState();
 const [creditserror, setCreditsError] = useState();
 const [loading, setLoading] = useState(true);
 const [creditsloading, setCreditsLoading] = useState(true);
const [credits, setCredits] = useState();
const [videos, setVideos] = useState();
const [person, setPerson] = useState();
const [videosloading, setVideosloading] = useState(true);
const [videoserror, setVideoserror] = useState();
const [personloading, setPersonloading] = useState(true);
const [personerror, setPersonerror] = useState();
 useEffect(() => {
    axios(
         `https://api.themoviedb.org/3/${type}/${id}?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`
    )
    .then((response) => {
        setDetails(response.data)
    })
    
    .catch(() => setError("something went wrong"))
    .finally(() => setLoading(false));
 }, []);

 useEffect(() => {
    axios(
         `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
    .then((response) => {
        setCredits(response.data)
    })
    
    .catch(() => setCreditsError("something went wrong"))
    .finally(() => setCreditsLoading(false));
 }, []);
 useEffect(() => {
    axios(
         `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
    .then((response) => {
        setVideos(response.data)
    })
    
    .catch(() => setVideoserror("something went wrong"))
    .finally(() => setVideosloading(false));
 }, []);
 useEffect(() => {
    axios(
         `https://api.themoviedb.org/3/${type}/${id}/person?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
    .then((response) => {
        setPerson(response.data)
    })
    
    .catch(() => setPersonerror("something went wrong"))
    .finally(() => setPersonloading(false));
 }, []);

 details && console.log(details)
 credits && console.log(credits)
 videos && console.log(videos)
 person && console.log(person)
 return loading && creditsloading && videosloading && personloading ? ( <p>loading</p> ) : 
 (  
 <>
 <article style={{paddingLeft:"2.5rem"}}>
 <Searchbar></Searchbar>
 {type==="movie" ? <MovieDetails credits={credits} details={details} videos={videos}/> : type=="tv" ? <TvDetails details={details} credits={credits} videos={videos}/> : <PersonDetails details={details} /> }
</article>
 </>);
};

export default Details;