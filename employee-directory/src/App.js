import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
// import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchForm />
        {/* <SearchResults /> */}
      </div>
    </Router>
  );
}

export default App;
