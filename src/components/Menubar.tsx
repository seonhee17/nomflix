import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { Category } from "../atom";
import Icon from "./ Icon";



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

const BtnArea = styled(motion.div)`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

`;



function MenuBar () {
    
    //const [x , setX] = useState(useMotionValue(60)); 
    const [category, setCategory] = useRecoilState(Category);

    const navigate = useNavigate();
    
    const popular = () =>{
      //  x = useMotionValue(60);
        setCategory('popular');
        navigate( "/");
      

    }

    const coming = () =>{
       // x = useMotionValue(210);
        setCategory('coming');
        navigate( "/coming-soon");
    }

    const now = () =>{
       // x = useMotionValue(390);
        setCategory('now');
        navigate( "/now-playing");
    }
    
 
    return (
        <>
        <Navi>
            <BtnArea>
                <Btn onClick={popular}   >POPULAR</Btn>
                <Btn onClick={coming}  >COMING SOON</Btn>
                <Btn onClick={now}  >NOW PLAYING</Btn>
            </BtnArea>
           <Icon category={category}/>     
        </Navi>
        
        </>  
    );
};

  
export default MenuBar;
