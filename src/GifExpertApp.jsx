import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGif } from "./components/GridGif";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one push']);

    const addCategories = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories]);

        console.log(onNewCategory,'Padre');
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* input */}
            <AddCategory onNewCategory={addCategories} />
            {/* lista */}
            {categories.map((category)=> (<GridGif key={category} category={category}/>))}
        </>
    );
};
