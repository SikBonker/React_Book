import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import BookPage from "./component/BookPage";
import BookData from "./component/BookData";
import BookDetail from './component/BookDetail';

function App() {
  const books = BookData;
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookPage books={books}/>} />
          <Route path="/books/:id" element={<BookDetail books={books}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
