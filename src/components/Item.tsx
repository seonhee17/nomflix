import styled from "styled-components";
import { motion } from "framer-motion"; 
import { useLocation } from "react-router-dom";


import { makeImagePath } from "../api";


const MovieItem = styled(motion.li)`
   width: 180px;
   height: 360px;
   display: inline-block;
   margin: 15px;
   border-radius : 15px;
   
   img{
    width: 100%;
    display: inline-block;
    border-radius: 10%;
   }
   span{
    display: inline-block;
    font-size:16px;
    font-weight: 800;
   } 
`;

const MovieImg = styled(motion.div)`
      
`;

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


interface IItemInfo{
  id:string;
  title:string;
  imgPath : string;
}


function Item({ id , title ,imgPath }:IItemInfo) {
    return (
      <>

        <MovieItem key={id}  variants={item}  >
          <MovieImg
            whileHover={{ scale: 1.3 }}
            >
            <img src={makeImagePath(imgPath)} 
                 alt={title} 
                 
                  />
          </MovieImg>
          <span>{title}</span>
        </MovieItem>
      </>
   );

  }



export default Item;