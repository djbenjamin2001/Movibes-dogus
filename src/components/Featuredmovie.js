import axios from "axios";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Featured = () => {
 const imgstyle = css`
 width: 65rem;
 height: 25rem;
 filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
border-radius: 20px;
 `
  const [Featuredmovie, setFeaturedmovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
      .then((response) => setFeaturedmovie(response.data.results[0]))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);
  Featuredmovie && console.log(Featuredmovie)
  return loading ? (
    <p>loading</p>
  ): (
    <div>
    <img css={imgstyle}  src={"https://image.tmdb.org/t/p/original" + Featuredmovie.backdrop_path}  alt="" />
    </div>
  );
};

export default Featured;
