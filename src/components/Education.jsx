import React from 'react'
import Illustration from './Illustration'
import illustrationUrl from "../assets/hero.svg"


const Education = () => {
    return (
        <div id='education' className=" pt-3 " style={{ height: "90vh", background: "purple" }}>
            <h1>Education</h1>
            <div className='d-flex justify-content-center align-items-center h-75 '>

                <Illustration illustrationUrl={illustrationUrl} />
                <EducationContent />
            </div>

        </div>
    )

}


const EducationContent = () => {
    return (
        <div data-aos="fade-left" className=' flex-fill  p-4'>
            <Course />
            <Course />
            <Course />

        </div>
    )
}

const Course = () => {
    return (
        <div className='m-3'>
            <h4>Bachelor of Technology</h4>
            <ul >
                <li>
                    <span>Murshidabad College Of Engineering and Technology</span>
                </li>
                <li>
                    <span>Percentage : </span>
                    <span>74</span>
                </li>
                <li>
                    <span>Passing Year : </span>
                    <span>2024</span>
                </li>
            </ul>
        </div>
    )
}
export default Education