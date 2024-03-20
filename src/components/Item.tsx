import styled from "styled-components";
import { motion } from "framer-motion"; 
import { useLocation } from "react-router-dom";
import { makeImagePath } from "../api";


const MovieItem = styled.div`
   width: 180px;
   height: 360px;
   display: inline-block;
   margin-top: 30px;
   
   img{
    width: 100%;
    display: inline-block;
   }
   span{
    display: inline-block;
    font-size:16px;
    font-weight: 800;
   } 
`;



interface IItemInfo{
  title:string;
  imgPath : string;
}


function Item({ imgPath , title }:IItemInfo) {
    return (

        <MovieItem>
          <img src={makeImagePath(imgPath)}/>
          <span>{title}</span>
        </MovieItem>
   );

  }



export default Item;