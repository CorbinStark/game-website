
import React, { useEffect, useState } from 'react';

export default function Carousel(props) {
    const [currentImage, setImage] = useState(0);
    const [imageOpacity, setOpacity] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);

    function clickNextButton() {
        setImage(currentImage - 1 >= 0 ? currentImage-1 : props.images.length-1);
        //setOpacity(0);
    }

    function clickPrevButton() {
        setImage(currentImage + 1 < props.images.length ? currentImage+1 : 0);
        //setOpacity(1);
    }

    if(modalOpen) {
        return (
            <>
            <div class="modal">
                <div class="modal-content">
                    <img src={props.images[currentImage]} class="modal-content"></img>
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
            </>
        );
    } else {
        return (
            <>
            <div class="carousel-div">

                <div class={imageOpacity == 1 ? "mySlides" : "mySlidesFade"}>
                    <div style={{position:'absolute', padding:'15px', fontSize:'16px'}} class="image-index">{currentImage+1} / {props.images.length}</div>
                    <a onClick={() => setModalOpen(true)} href="#modal"><img src={props.images[currentImage]} style={{borderRadius:'15px'}}></img></a>
                </div>

                <a class="prev" onClick={() => clickNextButton()}>&#10094;</a>
                <a class="next" onClick={() => clickPrevButton()}>&#10095;</a>

            </div>
            </>
        );
    }
}

Carousel.defaultProps = {
    
}