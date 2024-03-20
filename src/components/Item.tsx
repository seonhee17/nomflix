import styled from "styled-components";
import { motion } from "framer-motion"; 
import { useLocation } from "react-router-dom";

/* const ListItem = styled.div`

    img{

    }
`; */

const Item = ()=> {
    const location  = useLocation();
    console.log(location);
    return (
        <>
          {/*   <h1>{location}</h1> */}
     </>
   );
}



export default Item;