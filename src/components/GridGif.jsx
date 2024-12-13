import { getGifs } from "./getGif";
import React, { useState, useEffect } from "react";

export const GridGif = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };

    useEffect(() => {
     getImages();
     
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <ol>
            {images.map(({id,title})=> <li key={id}>{title}</li>)}
            </ol>
          
        </>
    );
};
