import React, { useState } from "react";
import NavBar from "./Component/NavBar";
// import Footer from "./Footer";
import Movies from "./Component/Movies";

import { Routes, Route } from "react-router-dom";
import Details from "./Component/Details";

function App() {
  const [query, setQuery] = useState("");

  return (
    
    <>
      <NavBar query={query} setQuery={setQuery} />
      <div className=" container py-4">
        <Routes>
          <Route path="/" element={<Movies query={query?true:false}/>} />
          <Route path="movies" element={<Movies  />} />
          <Route path="details" element={<Details />}>
            <Route path=":id" element={<Details />}></Route>
          </Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
