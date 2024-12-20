import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridItem } from "./GridItem";

export const GridGif = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((images) => (
                    <GridItem key={images.id} {...images} />
                ))}
            </div>
        </>
    );
};
