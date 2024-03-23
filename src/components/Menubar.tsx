import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion,TapInfo,transform ,useMotionValue, useVelocity, useTransform } from "framer-motion";
import { useRecoilState } from "recoil";
import { Category } from "../atom";
import { useEffect, useState } from "react";


const Navi = styled.div`
            width: 55%;
            min-width: fit-content;
            display: flex;
            justify-items: center;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: baseline;
            margin: 20px auto;
            flex-direction: column;
    


`;

const Btn = styled(motion.button)`
    background-color : black;
    color : white;
    font-size : 1em;
    margin: 0 auto;
    border:0px;
    font-weight:700;
    cursor: pointer;
`;
const Circle = styled(motion.div)`
      width : 8px;
      height: 8px;
      border-radius : 15px;
      display:block;
      color: #e91e63;
      background-color: #e91e63;

`;
const BtnArea = styled(motion.div)`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

`;
const CircleArea = styled(motion.div)`
`;

function onTap(event: MouseEvent, info : TapInfo) {
    console.log(info.point.x, info.point.y)
}

const iconVariants = {

};




function MenuBar () {
  
  
   // const [x , setX] = useState(useMotionValue(0)); 
   
    const [category, setCategory] = useRecoilState(Category);

    const navigate = useNavigate();
    
    const popular = () =>{
        setCategory('popular');
        navigate( "/");
    }

    const coming = () =>{
        setCategory('coming');
        navigate( "/coming-soon");
    }

    const now = () =>{
        setCategory('now');
        navigate( "/now-playing");
     }

    // const transformer = transform([0, 100], [0, 360]);
    const x = useMotionValue(60);
    //const xVelocity = useVelocity(x);
    //const y = useMotionValue(1);
    const opacity = useTransform(
        x,
        // Map x from these values:
        [0, 100],
        // Into these values:
        [1, 0]
      );

    return (
        <>
        <Navi>
            <BtnArea>
                <Btn onClick={popular} whileTap="tap" >POPULAR</Btn>
                <Btn onClick={coming} >COMING SOON</Btn>
                <Btn onClick={now} >NOW PLAYING</Btn>
            </BtnArea>
            <CircleArea>
                <Circle style={{x}}/>
            </CircleArea>
        </Navi>
        
        </>  
    );
};

  
export default MenuBar;
