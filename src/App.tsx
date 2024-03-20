import styled from "styled-components";
import {  Outlet } from "react-router-dom";
import List from "./routes/List";
import MenuBar from "./components/Menubar";

const Layout = styled.div`
    width: 40%;
    height:100%;
    margin: 0 auto;
    background-color: black;

`;


export default function App() {
 
  return (
    <>
    <Layout>
        <MenuBar />
        <List/>
        <Outlet/>
    </Layout>
    </>
  );
}
