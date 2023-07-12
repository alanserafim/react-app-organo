import './Banner.css'
import React from 'react'

interface BannerProps {
    src: string,
    alt?: string,
}

export default function Banner({src, alt}:BannerProps){
    return(
        <>
        <header className='banner'>
            <img 
                // src={"/img/banner.png"} 
                src={src} 
                alt={alt}/>
        </header>
        </>
    )
}