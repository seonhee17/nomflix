import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";


const CircleArea = styled(motion.div)`
    width: 100%;
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
`;
const Circle = styled(motion.div)`
      width : 8px;
      height: 8px;
      border-radius : 15px;
      display:block;
      color: #e91e63;
      background-color: #e91e63;

`;


export default function Icon(category:string) {
    
    let x = useMotionValue(60);
    
    if (category === "coming") {
        x = useMotionValue(210);
    }else{
        x = useMotionValue(390);
    }

    return (
        <CircleArea>
            <Circle style={{x}} /> 
         </CircleArea>       
    );


}