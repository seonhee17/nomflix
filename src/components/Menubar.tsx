import { useNavigate, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import App from "../App";

const Navi = styled.div`
    margin-top : 20px;
`;

const Btn = styled.button`
    background-color : black;
    color : white;
    font-size : 1em;
    margin : 10px;
    border:0px;
`;


function MenuBar () {

    const navigate = useNavigate();
    navigate( "/",{state :{key: 'popular'}});
    
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
   
        <Navi>
            <Btn onClick={popular} >POPULAR</Btn>
            <Btn onClick={coming} >COMING SOON</Btn>
            <Btn onClick={now} >NOW PLAYING</Btn>
            <Routes>
                <Route  path="/coming-soon" element={<App />}></Route>  
                <Route  path="/now-playing" element={<App />}></Route> 
            </Routes>
        </Navi>   
    );
};

export default MenuBar;
