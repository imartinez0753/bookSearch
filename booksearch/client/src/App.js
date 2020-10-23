import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/search/index"
import Fav from "./pages/fav/index"
import NavBar from "./components/navBar/navBar"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
        <NavBar />      
      <Route exact path="/" component={Search} />
        <Route exact path="/fav" component={Fav} />

        </StoreProvider>
      
      </div>
      </Router>
  )
}

export default App;
