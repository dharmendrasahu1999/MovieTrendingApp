import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movie from './Components/Movie';
import Favourite from './Components/Favourite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path='/'exact element={<><Banner/> <Movie/></> }/>
      <Route path='/favourites' element={<Favourite/>}/>
      </Routes>
      {/* <Navbar></Navbar>
      <Banner></Banner>
      <Movie></Movie>
      <Favourite/> */}
    </Router>
  );
}

export default App;
