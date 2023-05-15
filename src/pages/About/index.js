import React from "react";
import About from "../../components/About";
import { useSelector } from "react-redux";
import "./styles/about.css";

export default function AboutPage() {

    let aboutData = useSelector((store) => store.about)
    console.log(aboutData)

    return (
        <>
            <About title={aboutData.title} />
            <About text={aboutData.text} />
        </>
    )
}