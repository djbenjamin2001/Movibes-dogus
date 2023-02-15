/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const TvDetails = ({ details, videos, credits }) => {
  const [youtubeid, setYoutubeid] = useState();
  const imgstyle = css`
    width: 70.875rem;
    aspect-ratio: 2.5;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
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
        <h2>{details.vote_average.toFixed(1)}/10</h2>
      </div>
      <p css={detailsoverviewstyle}>{details.overview}</p>
      <div css={membertextstyle}>
        <p>Stars:</p>
        {credits?.cast.map((member, index) => {
          if (index < 4)
            return <p style={{ color: "#3DD2CC" }}>{member.name}</p>;
        })}
      </div>
    </section>
  );
};

export default TvDetails;
