import React from 'react'

const Illustration = ({ illustrationUrl }) => {

    return (
        <div className='w-75 d-flex justify-content-center align-items-center  h-100 p-3'>
            <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={illustrationUrl} alt="illustration-img" className='image-fluid' />
        </div>
    )

}

export default Illustration
