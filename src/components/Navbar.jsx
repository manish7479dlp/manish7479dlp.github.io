import React from 'react'

import resumePath from "../assets/resume.pdf"

const Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid d-flex">
                <h1 className="navbar-brand" >Portfolio</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>

                    </ul>
                    <a href={resumePath} download className="btn btn-success">Resume</a>
                </div>
            </div>
        </nav>


    )
}

export default Navbar