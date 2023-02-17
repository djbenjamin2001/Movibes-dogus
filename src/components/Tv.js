/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";
import "./Flickity.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Television = () => {


  const containerStyle = css`
    width: 12rem;
    aspect-ratio: 0.7;
    margin-right: 2rem;
  `;
  const imgstyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  `;


  const [latesttvs, setLatesttvs] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/tv/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`
    )
      .then((response) => setLatesttvs(response.data.results))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <p>loading</p>
  ) : (
    <section>
      <h1>TV</h1>
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
          {latesttvs.map((latesttv) => (
            <div css={containerStyle}>
           <Link to={`/details/tv/${latesttv.id}`}> <img
                css={imgstyle}
                src={
                  "https://image.tmdb.org/t/p/original" + latesttv.poster_path
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

export default Television;
