
/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PersonDetails = () => {
  let { id } = useParams();
  const [people, setPeople] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
    )
      .then((response) => {
        setPeople(response.data);
      })

      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);
console.log(people)

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
 
  return loading  ? ( 
    <p>loading</p>
  ) : (
    <article style={{margin:"2rem"}}>
        <section css={membertextstyle}>
      <img   css={imgstyle}  src={
                        "https://image.tmdb.org/t/p/original" +
                        people?.profile_path} alt="" />
                      <div>
 <h2>
    {people?.name}
 </h2>
 <h2>
    {people?.birthday}
 </h2>
 <h2>
   Job: {people?.known_for_department}
 </h2>
 <h2>
   {people?.place_of_birth}
 </h2>
 </div>

 </section> 
 <p css={textstyle}>{people?.biography}</p>
    </article>
  );
};

export default PersonDetails;
