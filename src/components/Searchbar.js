/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Searchbar = () => 
{
    const style = css`
width:56rem;
height:3.2rem;
  background-color:#212121;
    border-radius: 30px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;
    margin-bottom: 2rem;
    `
    
    return ( 
<form  action="/search">
    <input css={style} id="search" type="search" name="query" placeholder="Search for movies, Tv shows..." />
</form>     );
}
 
export default Searchbar;