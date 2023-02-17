/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
const TvDetails = ({ details, videos, credits }) => {
  const [youtubeid, setYoutubeid] = useState();
  const imgstyle = css`
    width: 10rem;
    height: 10rem;
    aspect-ratio: 0.5;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 100px;
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
const genrestyle=css` 
border: 1px solid rgba(232, 232, 232, 0.35);
border-radius: 50px;
padding: 10px;
font-size:15px;
`
const membertextstyle = css`
  display: flex;
  gap: 1rem;

  font-size: 20px;
`;
  useEffect(() => {
    if (videos) {
      setYoutubeid(
        videos.results.find((video) =>
          video.type.toLowerCase().includes("trailer")
        )
      );
    }
  }, [videos]);
  console.log(credits);
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
        <h2>{details.name}</h2>
        <h2>{details.first_air_date.slice(0,4)}</h2>
        <h2>
        {details.number_of_episodes} episodes
        </h2>
        <h2>{details.original_language}</h2>
        <h2>{details.number_of_seasons}  { details.number_of_seasons === 1 ? "season" : "seasons"}</h2>
        {details?.genres.map((detailgenre, index) => {
          if (index < 3)
            return <p css={genrestyle}>{detailgenre.name}</p>;
        })}
        <h2><FaStar color="#3DD2CC"/>{details.vote_average.toFixed(1)}/10</h2>
      </div>
      <p css={detailsoverviewstyle}>{details.overview}</p>
      <div css={membertextstyle}>
        <p style={{paddingTop:"10.2rem"}}>Stars:</p>
        {credits?.cast.map((member, index) => {
          if (index < 4)
            return  <div><img css={imgstyle} src={
              "https://image.tmdb.org/t/p/original" +
              member.profile_path
            } alt="" /> 
         <p style={{ color: "#3DD2CC", textAlign:"center" }}><Link style={{ color: "#3DD2CC", textDecoration:"none" }} to={`/person/${member.id}`}>{member.name}</Link></p></div>
        })}
      </div>
    </section>
  );
};

export default TvDetails;
