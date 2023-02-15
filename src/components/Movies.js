/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import "./Flickity.css";
const Movies = () => {
  const containerStyle = css`
    width: 12rem;
    aspect-ratio: 0.7;
    margin-right: 2rem;
  
  `;
  const imgstyle = css`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  `;

  const headlinestyle = css`
    font-size: 24px;
  `;
  const [popularmovies, setPopularmovies] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`
    )
      .then((response) => setPopularmovies(response.data.results))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);
  popularmovies && console.log(popularmovies);
  return loading ? (
    <p>loading</p>
  ) : (
    <section>
      <h1 css={headlinestyle}>Popular</h1>
      <div style={{ width: "50rem"}}>
        <Flickity
          options={{
            groupCells: true,
            prevNextButtons: false,
            contain:true
          }}
          reloadOnUpdate
          static
        >
          {popularmovies.map((popularmovie) => (
            <div css={containerStyle}>
             <Link to={`/details/movie/${popularmovie.id}`}>  <img
                css={imgstyle}
                src={
                  "https://image.tmdb.org/t/p/original" +
                  popularmovie.poster_path
                }
                alt=""
              /></Link>
            </div>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default Movies;
