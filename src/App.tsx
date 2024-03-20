import styled from "styled-components";
import {  Outlet, useLocation } from "react-router-dom";
import List from "./routes/List";
import MenuBar from "./components/Menubar";
import { IAPIResponse, getComingSoon, getNowPlaying, getPopular } from "./api";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Layout = styled.div`
    width: 40%;
    height:100%;
    margin: 0 auto;
    background-color: black;
    text-align: center;
`;


export default function App() {
  return (
    <div>
  
    <Layout>
        <MenuBar />
        <List/>
        <Outlet/>
    </Layout>
    
    </div>
  );
}
