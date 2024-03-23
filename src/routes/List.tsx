import styled  from "styled-components";
import { IAPIResponse, getPopular,getComingSoon,getNowPlaying, makeImagePath } from "../api";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { Category } from "../atom";
import { useLocation, useNavigate } from "react-router-dom";
import Item from "../components/Item"; //default export
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";



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


export default function List(){
 
    const navigate = useNavigate();
   // const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
    const category = useRecoilValue(Category);
    console.log("List.tsx",category);

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
                           exit="exit" >
                
               
                  {data?.results.map((movie,index ) => (
                  <>
                    <Item key={index}
                          id={movie.id.toString()}
                          title={movie.title}
                          imgPath={movie.poster_path}
                          layoutId={movie.id + ""} 
                          onClick={() => setSelectedId(movie.id+"")}
                          bgPhoto={makeImagePath(movie.backdrop_path)} /> 

                          
                  </>    
                  ))
                  }
                  
              </MovieList> 
              <AnimatePresence>
                  {selectedId && (


                          <motion.div key="modal"
                                      layoutId={selectedId}
                                      initial = {{ opacity : 0}}
                                      animate = {{ opacity : 1}}
                                      style={{
                                          position: "absolute",
                                          width: "40vw",
                                          height: "80vh",
                                          backgroundColor: "red",
                                          top: 50,
                                          left: 0,
                                          right: 0,
                                          margin: "0 auto",
                                      }} 
                                      exit={{ opacity : 0 }}/>

                  )}
              </AnimatePresence>
                 
              
                  
              
               </>
            )
        }
       </>
    );
}; 

