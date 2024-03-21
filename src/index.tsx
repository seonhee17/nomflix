import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.d";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement );

const client = new QueryClient();

root.render(
  <BrowserRouter>
    <React.StrictMode>
     <QueryClientProvider client={client}>
        <GlobalStyle /> 
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
