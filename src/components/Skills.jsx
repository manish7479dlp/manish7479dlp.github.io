import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className=' p-4'>
            <h1 className='h1'>Skills</h1>

            <div >
                <Tech skillName={"Java"} percent={"90%"} bgColor={"bg-success"} />
                <Tech skillName={"C"} percent={"70%"} bgColor={"bg-warning"} />
                <Tech skillName={"C++"} percent={"60%"} bgColor={"bg-info"} />
                <Tech skillName={"Python"} percent={"50%"} bgColor={"bg-warning"} />






            </div>

        </div>
    )
}

const Tech = ({ skillName, percent, bgColor }) => {
    return (
        <div className=" p-3">
            <p className="h5">
                {skillName}
            </p>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                <div className={`progress-bar ${bgColor}`} style={{ width: percent }}>{percent}</div>
            </div>

        </div>
    )
}

export default Skills