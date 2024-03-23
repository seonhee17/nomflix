import styled from "styled-components";
import {  Outlet } from "react-router-dom";
import  List  from "./routes/List";
import MenuBar from "./components/Menubar";



const Layout = styled.div`
    width: 45%;
    min-width:45%;
    height:100%;
    margin: 0 auto;
    background-color: black;
    text-align: center;
`;

const ChangeArea = styled.div`
    width: 100%;
  
`;

export default function App() {
 
  return (
    <>
      <Layout>
        <MenuBar />
        <ChangeArea>
          <List />
          <Outlet/> 
        </ChangeArea>
      </Layout>
    </>
  );
}
