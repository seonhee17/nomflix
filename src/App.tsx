import styled from "styled-components";
import {  Outlet, Routes , Route } from "react-router-dom";
import List from "./routes/List";
import MenuBar from "./components/Menubar";


const Layout = styled.div`
    width: 45%;
    height:100%;
    margin: 0 auto;
    background-color: black;
    text-align: center;
`;


export default function App() {
  return (
    <>
      <Layout>
          <MenuBar />
          <Outlet/>
      </Layout>
    </>
  );
}
