import { useLocation } from "react-router-dom";
import styled  from "styled-components";
import { IAPIResponse, getPopular,getComingSoon,getNowPlaying } from "../api";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { Category } from "../atom";


import Item from "../components/Item"; //default export
import { motion } from "framer-motion";



const MovieList = styled(motion.ul)`

      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap : 15px;
      justify-items: center;

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
 
    const category = useRecoilValue(Category);
    console.log("List.tsx",Category);

    const { isLoading , data   } = useQuery<IAPIResponse>({
        queryKey: category,
        queryFn : (category ===  "coming"  ? getComingSoon : ( category ===  "now"  ? getNowPlaying : getPopular))

    });
   
    return (
        <>
        {  isLoading ? 
            (<Loader> is Loading... </Loader>)
            :
            (<MovieList className={category}
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