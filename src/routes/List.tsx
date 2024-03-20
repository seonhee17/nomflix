import { useLocation } from "react-router-dom";
import styled  from "styled-components";
import { IAPIResponse, getPopular,getComingSoon,getNowPlaying } from "../api";
import { useQuery } from "react-query";
import Item from "../components/Item";
/* 
interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
 */

const Loader = styled.span`
  text-align: center;
`;


 function List () {
    const location = useLocation();

    const key = location.state.key || "";
     
    const { isLoading , data  } =   useQuery<IAPIResponse>({
        queryKey: "allMovies",
        queryFn : (key ===  "comming"  ? getComingSoon : ( key ===  "now"  ? getNowPlaying : getPopular))
    });
   
    return (
        <>
        {   isLoading ? 
            (<Loader> is Loading... </Loader>)
            :
            (<div>
                {
                    data?.results.map((item) =>(
                     
                        <Item imgPath={item.poster_path}
                              title={item.title} />
                    ))
                }
            </div>
            )
            
        }
        </>
    );
}; 

export default List;