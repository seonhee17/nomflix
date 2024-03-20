import { useNavigate,Link } from "react-router-dom";
import styled from "styled-components";

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
        navigate( "/Poupular",{state :{key: 'POPULAR'}});
    }
    const coming = () =>{
        navigate( "/Coming",{state :{key: 'COMING SOON'}});
    }
    const now = () =>{
        navigate( "/Now",{state :{key: 'NOW PLAYING'}});
    }

    return (
        <header>
            <ul>
                <li><Btn onClick={popular} >POPULAR</Btn></li>
                <li><Btn onClick={coming} >COMING SOON</Btn></li>
                <li><Btn onClick={now} >NOW PLAYING</Btn></li>
            </ul>
        </header>
    );
};

export default MenuBar;
