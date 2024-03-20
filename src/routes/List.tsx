import { useLocation } from "react-router-dom";

function List () {
    const location = useLocation();
    console.log(location);
    return (
        <div></div>
    );
} 

export default List;