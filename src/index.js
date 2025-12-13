import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/main.scss";
import HomePage from "./Pages/homePage";
import BookInProgress from "./Pages/bookInProgress";
import BookRead from "./Pages/bookRead";
import Library from "./Pages/library";
import PileToRead from "./Pages/pileToRead";
import Wishlist from "./Pages/wishlist";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Bibliotheque" element={<Library />} />
        <Route path="/PileALire" element={<PileToRead />} />
        <Route path="/LivresEnCours" element={<BookInProgress />} />
        <Route path="/LivresLus" element={<BookRead />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
