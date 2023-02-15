/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flickity from "react-flickity-component";
import "./Flickity.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Upcoming = () => {
  /*  const imgstyle = css`
    aspect-ratio:0.66;
    width:10rem ;
    padding-right: 2rem;
    padding-left: 2rem;
    justify-content: space-between;
    `
    const moviestyle = css`
    display: flex;
    flex-direction:row;
    margin: 2rem;
    gap: 1rem;
    text-align: center;
    overflow-x:scroll;
    width: 100rem;
    ::-webkit-scrollbar {
    display: none;
}
    `
    const headlinestyle = css`
    margin-left:5rem;
    `
    const [latesttvs, setLatesttvs] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/tv/popular?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`) 
      .then(response => setLatesttvs(response.data.results) )
      .catch(()=> setError ("something went wrong"))
      .finally(()=> setLoading(false))
    }, []);
   
    return loading ? ( <p>loading</p> ) : ( <div>
        <h1 css={headlinestyle}>Tv shows</h1>
        <article css={moviestyle}>
{ latesttvs.map((latesttv, index) => {
    if (index) return (
    <div>
    <img css={imgstyle} src={"https://image.tmdb.org/t/p/original" + latesttv.poster_path} alt="" />
    <p>{latesttv.name}</p>
    </div>
)})};
        </article>
    </div>);*/

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
      `https://api.themoviedb.org/3/movie/upcoming?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US&page=1`
    )
      .then((response) => setLatesttvs(response.data.results))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <p>loading</p>
  ) : (
    <section>
      <h1>Upcoming</h1>
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
             <Link to={`/details/movie/${latesttv.id}`}> <img
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

export default Upcoming;
