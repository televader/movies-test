import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Nabvar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Harry from "../../components/Harry";
import { fillHarryCard } from "../../utils/helpers";
import "./styles/home.css";

export default function Home() {
    let movies = useSelector((store) => store.movies.data) // traerá la data recuperada de la api
    // console.log(movies)
    return (
        <>
            <Harry />
            <div className="cards-container">{movies.slice(0,25).map(fillHarryCard)}</div>
        </>
    )
}