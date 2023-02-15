/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import {FaStar} from 'react-icons/fa'
import { Link } from "react-router-dom";

const MovieDetails = ({ details, credits, videos, person }) => {
  const [hours] = useState(Math.floor(details?.runtime / 60));
  const [minutes] = useState(details?.runtime % 60);
  const [youtubeid, setYoutubeid] = useState();
  const imgstyle = css`
    width: 15.875rem;
    height: 10rem;
    aspect-ratio: 0.7;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 90px;
  `;
  const textstyle = css`
    display: flex;
    flex-direction: row;
    gap: 2rem;
  `;
  const detailsoverviewstyle = css`
    font-size: 20px;

    width: 70rem;
  `;
  const membertextstyle = css`
    display: flex;
    gap: 1rem;

    font-size: 20px;
  `;
const genrestyle=css` 
border: 1px solid rgba(232, 232, 232, 0.35);
border-radius: 50px;
padding: 10px;
font-size:15px;
`
  console.log(credits);
  console.log(videos);
  useEffect(() => {
    if (videos) {
      setYoutubeid(
        videos.results.find((video) =>
          video.type.toLowerCase().includes("trailer")
        )
      );
    }
  }, [videos]);
  console.log(youtubeid);
  return (
    <section>
      <iframe
        width="1080"
        height="560"
        src={`https://www.youtube.com/embed/${youtubeid?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div css={textstyle}>
        <h2>{details.title}</h2>
        <h2>{details.release_date.split("-")[0]}</h2>
        <h2>
          {hours}h {minutes}m
        </h2>
        <h2>{details.original_language}</h2>
        {details?.genres.map((detailgenre, index) => {
          if (index < 3)
            return <p css={genrestyle}>{detailgenre.name}</p>;
        })}
        <h2><FaStar color="#3DD2CC"/>{details.vote_average.toFixed(1)}/10</h2>
      </div>
      <p css={detailsoverviewstyle}>{details.overview}</p>
      <div css={membertextstyle}>
       <p>Stars:</p>
       
        {credits?.cast.map((member, index) => {
          if (index < 3)
            return   <div><img css={imgstyle} src={
                  "https://image.tmdb.org/t/p/original" +
                  member.profile_path
                } alt="" /> 
             <p style={{ color: "#3DD2CC" }}><Link to={`/details/person/${member.id}`}>{member.name}</Link></p></div>
        })}
        
      </div>

      <div css={membertextstyle}>
        <p>Crew:</p>
        {credits?.crew.map((member, index) => {
          if (index < 3)
            return  <p style={{ color: "#3DD2CC" }}>{member.name}</p>;
        })}
      </div>
    </section>
  );
};

export default MovieDetails;
