// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { loadMoviesData } from "./redux/slices/moviesSlice";
import axios from "axios";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    loadMovies()
  }, [])

  // ---- Movies ---- //
  function loadMovies() {
    axios.get("https://hp-api.onrender.com/api/characters")
      .then(response => {
        dispatch(loadMoviesData(response.data))
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
