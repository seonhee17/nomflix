import { useNavigate, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import List from "../routes/List";
import { motion }  from "framer-motion";

const Navi = styled.div`
    margin-top : 20px;
`;

const Btn = styled(motion.button)`
    background-color : black;
    color : white;
    font-size : 1em;
    margin: 20px 10px 10px 10px;
    border:0px;
`;

const Circle = styled(motion.div)`
    background-color: #c00;
    border-radius: 25px;  
    width:10px ;
    height:10px ;
    margin : 0 auto;
`;

const buttonVariants = {

}
const iconVariants = {

}

function MenuBar () {

    const navigate = useNavigate();
    
    const popular = () =>{
        navigate( "/",{state :{key: 'popular'}});
    }
    const coming = () =>{
        navigate( "/coming-soon",{state :{key: 'coming'}});
    }
    const now = () =>{
        navigate( "/now-playing",{state :{key: 'now'}});
    }

    return (
        <>
        <Navi>
            <Btn onClick={popular} 
                 whileTap="tap" 
                 variants={buttonVariants} >POPULAR</Btn>
                 
            <Btn onClick={coming} >COMING SOON</Btn>
                
            <Btn onClick={now} >NOW PLAYING</Btn>

              
            <Circle whileTap={{ transition : { }  }} />
                
        </Navi>
        <Routes>
          <Route  path="/"  element={<List/>}></Route>  
          <Route  path="/coming-soon"  element={<List/>}></Route>  
          <Route  path="/now-playing"  element={<List/>}></Route>
        </Routes>
        </>  
    );
};

export default MenuBar;



