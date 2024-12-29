import { useState } from "react";
import { AddCategory,GridGif } from "./components/";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch']);

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
