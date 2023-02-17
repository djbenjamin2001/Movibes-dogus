/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import {FaHome, FaFilm, FaCalendarAlt, FaTv} from 'react-icons/fa'

const Navigation = () => {
const navLinkStyle = css`
display: flex;
gap: 0.5rem;
text-align: center;
color: #666666;
padding: 2rem;
font-size:1.2rem;
text-decoration:none;
&.active{
    background-color: rgba(61, 210, 204, 0.4);
    color: #3DD2CC;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
& svg{
margin-top: 0.2rem;
}
`

    return ( 
        <nav>
  <NavLink to="/" css={navLinkStyle}> <FaHome/>Home</NavLink>
    <NavLink to="/movies" css={navLinkStyle}><FaFilm/>Movies</NavLink>
    <NavLink to="/tv" css={navLinkStyle}><FaTv/>Tv-series</NavLink>
    <NavLink to="/upcoming" css={navLinkStyle}><FaCalendarAlt/>Upcoming</NavLink>
    </nav>
        );
}
 
export default Navigation;