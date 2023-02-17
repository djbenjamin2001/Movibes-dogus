/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navigation from "./Navigation";

const Header = () => {
    const style = css`
    display: flex;
    flex-direction:column;
    height:100vh;
  background-color:#212121;
    width: 16rem;
    border-radius: 0px 45px 45px 0px;
    position: sticky;
    top: 0;
    box-sizing:border-box;
    padding: 1px;
    `
const headertext =css`
color: #3DD2CC;
margin-left: 3.5rem;
margin-bottom:4rem;
text-shadow: 0px 4px 4px rgba(61, 210, 204, 0.5);
`
    return ( 
      <header css={style}>
       <h1 css={headertext}>MOVIBES</h1>
       <Navigation></Navigation>
       </header>
     );
}
 
export default Header;