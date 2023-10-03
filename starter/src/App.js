import "./App.css";
import { useState } from "react";
import Shelf from "./Shelf";
import { Routes, Route } from "react-router-dom";
import Library from "./Library";
import Search from "./Search";

function App() {

  const [bookList, setBookList] = useState([]);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Library bookList={bookList} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
