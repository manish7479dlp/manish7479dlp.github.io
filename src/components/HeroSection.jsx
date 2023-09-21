import React from 'react'
import Illustration from './Illustration'
import illustrationUrl from "../assets/hero.svg"

const HeroSection = () => {
    return (
        <div className="d-flex justify-content-space-between align-items-center " style={{ height: "95vh" }}>
            <HeroContent />
            <Illustration illustrationUrl={illustrationUrl} />

        </div>
    )
}

const HeroContent = () => {
    return (
        <div className='flex-fill p-5'>
            <h1 className=' nameShadow'>Manish Kumar</h1>
            <p className='h5'>MERN STACK DEVELOPER</p>
            <p className='body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet perspiciatis doloremque illum hic tempora laboriosam blanditiis maxime quos consequatur totam.</p>
        </div>
    )
}



export default HeroSection