import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridItem } from "./GridItem";

export const GridGif = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);
    console.log(isLoading);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&(<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map((images) => (
                    <GridItem key={images.id} {...images} />
                ))}
            </div>
        </>
    );
};
