import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { Category } from "../atom";

const Navi = styled.div`
            width: 55%;
            min-width: fit-content;
            display: flex;
            justify-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: baseline;
            margin: 20px auto;

`;

const Btn = styled.button`
    background-color : black;
    color : white;
    font-size : 1em;
    margin: 0 auto;
    border:0px;
    font-weight:700;
`;
const Circle = styled(motion.div)`
      width : 8px;
      height: 8px;
      border-radius : 15px;
      display:block;
      color: #e91e63;
      background-color: #e91e63;

`;


function MenuBar () {

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
    
    return (
        <>
        <Navi>
            <Btn onClick={popular} >POPULAR</Btn>
            <Btn onClick={coming} >COMING SOON</Btn>
            <Btn onClick={now} >NOW PLAYING</Btn>
            <Circle />
        </Navi>
        
        </>  
    );
};

export default MenuBar;
