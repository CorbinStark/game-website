import React from 'react';
import { useEffect, useState } from 'react';

export default function PrimaryHeader(props) {
    const scrollToPos = (pos) => {
        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <header class="primary-header">
            <a onClick={() => scrollToPos(0)} href="#home"><img src="title.png" alt="Title"></img></a>
            <div class="navbar">
                <ul class="nav-list">
                <li><a onClick={() => scrollToPos(1450)} href="#introduction">INTRODUCTION</a></li>
                <li><a onClick={() => scrollToPos(2800)} href="#gamesystem">GAME SYSTEM</a></li>
                <li><a onClick={() => scrollToPos(4600)} href="#chara">CHARACTER</a></li>
                <li><a onClick={() => scrollToPos(5800)} href="#faq">FAQ</a></li>
                <li><a href="#gameplay">GAMEPLAY</a></li>
                </ul>

                <br></br>
                <p>SHARE</p>
                
                <p class="small-text">PRIVACY POLICY</p>
                <p class="small-text">@コービン・スターク/異世界お姉さん</p>
            </div>
        </header>
        </>
    );
}

PrimaryHeader.defaultProps = {

}