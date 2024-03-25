import styled  from "styled-components";
import { IAPIResponse, getPopular,getComingSoon,getNowPlaying } from "../api";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { Category } from "../atom";

import Item from "../components/Item"; //default export
import MovieDetail from "../components/MovieDetail"; //default export
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";



const MovieList = styled(motion.ul)`

      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap : 15px;
      justify-items: center;
      div{
        cursor: pointer;
      }

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

const Modal = styled(motion.div)`
`;


export default function List(){
 
    const category = useRecoilValue(Category);
    
    const { isLoading , data } = useQuery<IAPIResponse>({
        queryKey: category,
        queryFn : (category ===  "coming"  ? getComingSoon : ( category ===  "now"  ? getNowPlaying : getPopular))

    });
    const [selectedId, setSelectedId ] = useState("");
 /*    const [leaving, setLeaving] = useState(false);
    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onDetailClicked = (movieId: number) => {
        navigate(`/movies/${movieId}`);
    };
  */
    
    return (
        <>
        {  isLoading ? 
            (<Loader> is Loading... </Loader>)
            :
            (
           <>
             
              <MovieList className={category}
                           variants={container}
                           initial="hidden"
                           animate="visible"
                            >
                
               
                  {data?.results.map((movie,index ) => (
                  <div onClick={() => setSelectedId(movie.id.toString())}>
                    <Item key={index}
                          id={movie.id.toString()}
                          title={movie.title}
                          imgPath={movie.poster_path}
                          layoutId={movie.id + ""} 
                          
                          /> 

                          
                  </div>    
                  ))
                  }
                  
              </MovieList> 
              <AnimatePresence>
                  {selectedId? (
                        <Modal   key={selectedId}
                                 layoutId={selectedId}
                                 initial = {{ opacity : 0}}
                                 animate = {{ opacity : 1}}
                                 exit={{ opacity : 0 }}>
                                
                                <MovieDetail selectedId={selectedId} closeFn={setSelectedId}/> 
                        </Modal>              

                  ) : null }
              </AnimatePresence>
              </>
              
            )
        }
       </>
    );
}; 

