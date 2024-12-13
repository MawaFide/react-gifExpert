import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = ({ target }) => {
        setInputValue(target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        

        setInputValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="texto aqui"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
};
