import { useNavigate, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import List from "../routes/List";

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
            <Btn onClick={popular} >POPULAR</Btn>
            <Btn onClick={coming} >COMING SOON</Btn>
            <Btn onClick={now} >NOW PLAYING</Btn>
        </Navi>
        </>  
    );
};

export default MenuBar;
