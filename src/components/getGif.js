export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9Q3lN074p06IpB0YaCGBWH3FUZzvCcUt&q=valorant=${category}&limit=5`;
    const res = await fetch(url);
    const { data } = await res.json();

    

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    console.log(gifs);
    
    return gifs;
};
