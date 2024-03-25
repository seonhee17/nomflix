import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.d";
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement );


const client = new QueryClient();

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <GlobalStyle /> 
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>
  
);


