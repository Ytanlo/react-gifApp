import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    console.log(url)
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={id}></img>
            <p>{title}</p>
        </div>
    )
}
