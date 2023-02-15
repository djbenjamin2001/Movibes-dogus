
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
const PersonDetails = ({ details }) => {
  const imgstyle = css`
    width: 30%;
    height: 20%;
    aspect-ratio: 0.9;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    
  `;
  const textstyle = css`
   width:70rem ;
   font-size:16px;
  `;
  const detailsoverviewstyle = css`
    font-size: 20px;

    width: 70rem;
  `;
  const membertextstyle = css`
    display: flex;
    gap: 2rem;
  `;
const genrestyle=css` 
border: 1px solid rgba(232, 232, 232, 0.35);
border-radius: 50px;
padding: 10px;
font-size:15px;
`
 
  return (
    <article>
        <section css={membertextstyle}>
      <img   css={imgstyle}    src={
                        "https://image.tmdb.org/t/p/original" +
                        details.profile_path
                      } alt="" />
                      <div>
 <h2>
    {details.name}
 </h2>
 <h2>
    {details.birthday}
 </h2>
 <h2>
   Job: {details.known_for_department}
 </h2>
 <h2>
   {details.place_of_birth}
 </h2>
 </div>

 </section> 
 <p css={textstyle}>{details.biography}</p>
    </article>
  );
};

export default PersonDetails;
