import React from "react";
import { MenuItems } from "./MenuItems";

function Navbar () {
    return (
        <div className='container'>
            <nav className='navbar navbar-expand-md navbar-dark navbar-fixed-top'>
                <a className='navbar-brand' href="#">Avinash Rao</a>
                <button class="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#toggleMobileMenu" 
                        aria-controls="toggleMobileMenu" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='toggleMobileMenu'>
                    <ul className='nav navbar-nav ms-auto text-center'>
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='nav-item active' key={index}>
                                    <a className='nav-link' href={item.url}>{item.title}</a>
                                </li>
                                );
                            })}
                            <li>
                                <a className='nav-link' href='https://docs.google.com/document/d/1P-VQ-cWAOPuug_vvYbLwrKTmzR2D8ZW1hh-66WACEO4/edit?usp=sharing'  rel='google-drive-resume-link' target='_blank'>Resume</a>
                            </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;