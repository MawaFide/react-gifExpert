import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputvalue, setInputvalue] = useState('');

    const handleChange = ({ target }) => {
        setInputvalue(target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputvalue.length);

        if (inputvalue.trim().length <= 1) return;

        // onNewCategory((categories) => [inputvalue, ...categories]);
        onNewCategory(inputvalue.trim());
        setInputvalue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="texto aqui"
                value={inputvalue}
                onChange={handleChange}
            />
        </form>
    );
};
