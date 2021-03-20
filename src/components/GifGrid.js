import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import { getGifs } from '../helpers/getGifs';
import { AddCategory } from './AddCategory' */
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

/*     const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        getGifs(category)
            .then(gifs => setImages(gifs));
    }, [category]) */
   const { data,loading } = useFetchGifs(category);

    return (

    <>
        <h3>{category}</h3>
        {/* <h2>{count}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </h2>
        <button onClick={() => setCount(count +1)}>count++</button> */}
        <div className="card-grid">
            
                {data.map((img) => 
                    (<GifGridItem
                        key={img.id}
                        {...img} />))}
            
        </div>
    </>
    )
}
