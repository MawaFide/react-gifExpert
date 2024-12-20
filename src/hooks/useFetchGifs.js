import { useState, useEffect } from "react";

import { getGifs } from "../components/getGif";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    

    const getImages = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
    };
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
