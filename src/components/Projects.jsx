import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='p-4 bg-danger'>
            <h1 className='h1'>Projects</h1>

            <div className='d-flex justify-content-center flex-wrap align-items-center'>
                <ProjectDetailsCard />
                <ProjectDetailsCard />
                <ProjectDetailsCard />
                <ProjectDetailsCard />
            </div>

        </div>
    )
}

const ProjectDetailsCard = () => {
    return (
        <div data-aos="flip-right" className="card m-3" style={{ width: '18rem' }}>
            <img src="https://www.shutterstock.com/shutterstock/photos/2175846471/display_1500/stock-photo-project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with-gantt-2175846471.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Projects