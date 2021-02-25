import React from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Main from "./components/Main"

function App() {
  return (
      <div>
        <Navbar />
        <SearchForm />
        <Main/>
      </div>
  );
}

export default App;
