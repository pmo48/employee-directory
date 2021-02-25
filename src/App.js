import React from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
// import SearchResults from "./components/SearchResults";
import Main from "./components/Main"

function App() {
  return (
      <div>
        <Navbar />
        <SearchForm />
        {/* <SearchResults /> */}

        <Main/>
      </div>
  );
}

export default App;
