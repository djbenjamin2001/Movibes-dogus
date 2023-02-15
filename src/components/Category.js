/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Categories = () => {
 const categorystyle = css`
 background: #212121;
border-radius: 30px;

width: 15.875rem;

 `
    const [catorgies, setCatorgies] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [limit, setLimit] = useState(6);
    useEffect(() => {
        axios(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=2c8fc77b797cdf943cad63314a45daa4&language=en-US`
          )
            .then((response) => setCatorgies(response.data))
           .catch(() => setError("something went wrong"))
          .finally(() => setLoading(false)); 
          
    }, []);
   const handleView = (e)=>{
e.preventDefault()
    if(limit === 6){setLimit(catorgies.genres.length)}
    else{setLimit(6)}
   }

    return ( 
    <form css={categorystyle}>
        {catorgies?.genres?.map((detailgenre, index) => {
            if (index < limit)

              return (
              <div  style={{padding:"0.5rem", marginLeft:"2rem", display:"flex", justifyContent:"space-between"}}>
              <label >{detailgenre.name}</label> 
              <input type="checkbox" checked />
              </div>
              );
          })}
          <button onClick={handleView}>{limit === 6?"view all":"view less"}</button>
    </form>
    
    );
}
 
export default Categories;