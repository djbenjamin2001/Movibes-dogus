/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Flickity from "react-flickity-component";
import "./Flickity.css";
import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const imgstyle = css`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  `;

  const containerStyle = css`
    width: 12rem;
    aspect-ratio: 0.7;
    margin-right: 2rem;
  `;
  const [params] = useSearchParams();
  const query = params.get("query");
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState();
  const [people, setPeople] = useState();
  const [tv, setTv] = useState();
  console.log(query);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/multi?api_key=2c8fc77b797cdf943cad63314a45daa4&query=${query}`
    )
      .then((response) => {
        console.log(response.data.results);
        setMovies(
          response.data.results.filter(
            (result) => result.media_type === "movie"
          )
        );
        setPeople(
          response.data.results.filter(
            (result) => result.media_type === "person"
          )
        );
        setTv(
          response.data.results.filter((result) => result.media_type === "tv")
        );
      })
      .finally(() => setLoading(false));
  }, [query]);
  tv && console.log(tv);
  return loading ? (
    <p>loading</p>
  ) : (
    <section style={{paddingLeft:"2rem"}}>
    
        {movies.length ? (
          <section style={{ width: "50rem", paddingTop:"2rem" }}>
            <Flickity
              options={{
                groupCells: true,
                prevNextButtons: false,
                contain: true,
              }}
              reloadOnUpdate
              static
            >
              {movies.map((movie) => (
                <div css={containerStyle}>
                  <Link to={`/details/movie/${movie.id}`}>
                    {" "}
                    <img
                      css={imgstyle}
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        movie.poster_path
                      }
                      alt=""
                    />
                  </Link>
                  <h2>{movie.title}</h2>
                </div>
              ))}{" "}
            </Flickity>
          </section>
        ) : null}
    

      {people.length ? (
        <section >
          {people.map((person) => (
            <div  css={containerStyle}>
           <Link to={`/person/${person.id}`}>   <img   css={imgstyle}    src={
                        "https://image.tmdb.org/t/p/original" +
                        person.profile_path
                      } alt="" /></Link>
            <h2 style={{textAlign:"center"}}>{person.name}</h2>
            </div>
            
          ))}
        </section>
      ) : null}
      {tv.length ? (
        <section style={{ width: "50rem" , paddingTop:"5rem"}}>
           <Flickity
              options={{
                groupCells: true,
                prevNextButtons: false,
                contain: true,
              }}
              reloadOnUpdate
              static
            >
          {tv.map((tv) => (
            <div css={containerStyle}>
                <Link to={`/details/tv/${tv.id}`}>
                    <img
                      css={imgstyle}
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        tv.poster_path
                      }
                      alt=""
                    />
                  </Link>
              <h2>{tv.name}</h2>
            </div>
          ))}</Flickity>
        </section>
      ) : null}
    </section>
  );
};

export default Search;
