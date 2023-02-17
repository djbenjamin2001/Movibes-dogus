import axios from "axios";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams,useLocation} from "react-router-dom";
import Searchbar from "./Searchbar";
import MovieDetails from "./MovieDetails";
import TvDetails from "./TvDetails";

const Details = () => {
  let { id } = useParams();
  const location = useLocation()
  const [details, setDetails] = useState(null);
  const [error, setError] = useState();
  const [creditserror, setCreditsError] = useState();
  const [loading, setLoading] = useState(true);
  const [creditsloading, setCreditsLoading] = useState(true);
  const [credits, setCredits] = useState();
  const [videos, setVideos] = useState();
  const [videosloading, setVideosloading] = useState(true);
  const [videoserror, setVideoserror] = useState();
  const [type, setType] = useState(location.pathname.split("/")[2]);

  console.log(type);


  useEffect(() => {
    setLoading(true);
    axios(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`
    )
      .then((response) => {
        setDetails(response.data);
      })

      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
      .then((response) => {
        setCredits(response.data);
      })

      .catch(() => setCreditsError("something went wrong"))
      .finally(() => setCreditsLoading(false));
  }, []);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
      .then((response) => {
        setVideos(response.data);
      })

      .catch(() => setVideoserror("something went wrong"))
      .finally(() => setVideosloading(false));
  }, []);

  details && console.log(details);
  credits && console.log(credits);
  videos && console.log(videos);
  return loading && creditsloading && videosloading ? (
    <p>loading</p>
  ) : (
    <>
      <article style={{ paddingLeft: "2.5rem" }}>
        <Searchbar></Searchbar>
        {type === "movie" ? (
          <MovieDetails credits={credits} details={details} videos={videos} />
        ) :  <TvDetails details={details} credits={credits} videos={videos} />
        }
      </article>
    </>
  );
};

export default Details;
