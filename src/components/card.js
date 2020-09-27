import React from 'react'

const Card = ({ source }) => {
    return (
        <div className='Card'>
            <h3>Dog</h3>
            <img src={source} />
        </div>
    )
}



export default Card