import Searchbar from "./Searchbar";
import Movies from "./Movies";
import Television from "./Tv";
import Featured from "./Featuredmovie";
import Upcoming from "./Upcoming";
import Categories from "./Category";
const Home = () => {
 
    return ( <>
        <article style={{paddingLeft:"5rem"}}>
 <Searchbar></Searchbar>
 <Featured></Featured>
<Movies></Movies>
 <Television></Television>
 <Upcoming></Upcoming>
 <Categories></Categories>
        </article>
    </>);
}
 
export default Home;