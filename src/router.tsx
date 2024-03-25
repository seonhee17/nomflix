import App from "./App";
import { BrowserRouter,Routes,Route} from "react-router-dom";


function Router(){
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/*"  element={<App />}></Route>
        </Routes>
    </BrowserRouter>
  );
}; 

export default Router;





// Home Page (/): Display a list of popular movies.
// Coming Soon Page (/coming-soon): Display a list of upcoming movies.
// Now Playing Page (/now-playing): Display a list of movies that are currently playing in theaters.
// When a movie is clicked, create a modal that displays the movie's details.
// Use React Query to fetch the data.
// Use Framer Motion to recreate the animations seen in the video (navigation, movies list, modal)