import React from 'react'
import './styles/about.css';

export default function About(props) {
    return (
        <>
            <div className="container-about">
                <h2>{props.title}</h2>
                <div className='text-about'>
                    {props.text}
                </div>
            </div>
        </>
    );
}
