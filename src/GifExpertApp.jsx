import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCoategory = (onNewCategory) => {
        //comprobar si esxiste la categoria para no agregarla de nuevo
        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories]);
        console.log(onNewCategory);
    };
    return (
        <>
            <div>GifExpertApp</div>

            {/* input aqui */}
            <AddCategory onNewCategory={onAddCoategory} />
            {/* lista aqui */}
            <ul>
                {categories.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </>
    );
};
