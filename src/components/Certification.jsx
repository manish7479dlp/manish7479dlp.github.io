import React from 'react'

const Certification = () => {
    return (
        <div className='p-4 '>
            <h1 className='h1'>Certification</h1>

            <div className='d-flex justify-content-center flex-wrap align-items-center'>
                <CertificateDetailsCard />
                <CertificateDetailsCard />
                <CertificateDetailsCard />
                <CertificateDetailsCard />
            </div>

        </div>
    )
}

const CertificateDetailsCard = () => {
    return (
        <div data-aos="flip-left" className="card m-3" style={{ width: '18rem' }}>
            <img src="https://media.istockphoto.com/id/1128426035/vector/elegant-blue-and-gold-diploma-certificate-template.jpg?s=1024x1024&w=is&k=20&c=Zf8d5wpFbmBtyukThc7iJm9i7nDcHPGiGGDBG9UZfho=" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Certification