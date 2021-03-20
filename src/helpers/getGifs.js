export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=O9laPSw1qJ10pK5f2yHndgvDPkMnilAs`;
    const resp = await fetch(url);;
    const {data} = await resp.json()

    const gifs = data.map(({id, title,images:{downsized_medium:{url}}}) => {
        return {
            id: id,
            title: title,
            url: url
        }
    })
    return gifs;
} 
