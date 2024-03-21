import { useLocation } from "react-router-dom";
import styled  from "styled-components";
import { IAPIResponse, getPopular,getComingSoon,getNowPlaying } from "../api";
import { useQuery } from "react-query";
import Item from "../components/Item";
import { motion } from "framer-motion";


const MovieList = styled(motion.ul)`
      width: 100%;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


const Loader = styled.span`
  text-align: center;
`;


function List () {
    const location = useLocation();
    
    const state = location.state;
    const key = (state == null ? "" : ( state.key ));    
    console.log("List.tsx",key);
    let queryKeyword = "popular"
    if(key !== "" ){
      queryKeyword =  key;
    }

    const { isLoading , data ,refetch  } = useQuery<IAPIResponse>({
        queryKey: queryKeyword,
        queryFn : (key ===  "coming"  ? getComingSoon : ( key ===  "now"  ? getNowPlaying : getPopular))
    });
    //refetch();
    //리스트를 다시 그려줘야 할것 같다...
    

    return (
        <>
        {  isLoading ? 
            (<Loader> is Loading... </Loader>)
            :
            (<MovieList 
              variants={container}
              initial="hidden"
              animate="visible"
             >
                {   
                    data?.results.map((item,index) =>(
                      
                      <Item key={index} 
                            id={item.id.toString()} 
                            title={item.title} 
                            imgPath={item.poster_path}
                           />
                    ))
                }
            </MovieList>
            )
            
        }
       </>
    );
}; 

export default List;