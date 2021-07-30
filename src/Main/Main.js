import React from "react"; 
import mypic from "../Images/mypic.jpg"

export default function Main() { 
    return (
        <div class="container">
            <div class="jumbotron jumbotron-fluid">
                <div class="row">
                    <div class="col">
                        <img src={mypic} class="img-fluid img-thumbnail rounded float-start"></img>
                    </div>
                    <div class="col">
                        <p class="lead text-lg">Welcome to my page. </p>
                        <p class="text-start fst-normal lh-base">My name is Avinash. I graduated from the Immersive Software Engineering from <a href="https://www.thinkful.com/" target="_blank">Thinkful</a> in June of 2021 
                        as a Full-Stack Developer. Prior to Thinkful, I had no coding experience but through Thinkful I learned coding in 6 months. I'm well-versed in Javascript, HTML5, CSS, 
                        Bootstrap 5, Node.js, Express.js, React, Vue and PostgreSQL. I'm currently learning Java. I have worked on a couple of projects on my own for the Thinkful program which 
                        display's my knowledge in both Front-end development and Back-end development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}