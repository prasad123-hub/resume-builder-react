import React from "react";
import Context from "../Context/Context";

import "../Styles/Resume.css";

function Resume() {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="resume-outer" id="content">
          <div className="resume-inner">
            <div className="resume-profile">
              <h1 className="resume-profile-name">{context.data.fname}</h1>
              <p className="resume-profile-role">{context.data.role}</p>
              <hr />
            </div>
            {/* Personal Details */}
            <div className="resume-details">
              <ul className="resume-details-items">
                <li className="resume-details-item">{context.data.phone}</li>
                <li className="resume-details-item">{context.data.email}</li>
                <li className="resume-details-item">{context.data.address}</li>
              </ul>
              <hr />
            </div>
            {/* bio */}
            <div className="resume-bio">
              <div className="resume-bio-title">
                <p>Profile</p>
              </div>
              <p className="resume-bio-description">{context.bio.bio}</p>
            </div>
            {/* Education */}
            <div className="resume-education">
              <div className="resume-education-title">
                <p>Education</p>
              </div>
              <div className="resume-education-box">
                <p className="education-year">
                  {context.education.startOne} - {context.education.endOne}
                </p>
                <div className="resume-education-school">
                  <p className="education-degree">
                    {context.education.streamOne}
                  </p>
                  <p className="education-university">
                    {context.education.uniOne}
                  </p>
                </div>
              </div>
              <div className="resume-education-box">
                <p className="education-year">
                  {context.education.startTwo} - {context.education.endTwo}
                </p>
                <div className="resume-education-school">
                  <p className="education-degree">
                    {context.education.streamTwo}
                  </p>
                  <p className="education-university">
                    {context.education.uniTwo}
                  </p>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="resume-projects">
              <div className="resume-projects-title">
                <p>Projects</p>
              </div>
              <div className="resume-education-box ">
                <p className="education-year">
                  {context.projects.pStartOne} - {context.projects.pEndOne}
                </p>
                <div className="resume-education-school project-box">
                  <p className="education-degree">
                    {context.projects.pTitleOne}
                  </p>
                  <p className="education-university skills">
                    {context.projects.technologyOne}
                  </p>
                  <p className="project-description">
                    {context.projects.pdesOne}
                  </p>
                </div>
              </div>
              <div className="resume-education-box ">
                <p className="education-year">
                  {context.projects.pStartTwo} - {context.projects.pEndTwo}
                </p>
                <div className="resume-education-school project-box">
                  <p className="education-degree">
                    {context.projects.pTitleTwo}
                  </p>
                  <p className="education-university skills">
                    {context.projects.technologyTwo}
                  </p>
                  <p className="project-description">
                    {context.projects.pdesTwo}
                  </p>
                </div>
              </div>
              <div className="resume-education-box ">
                <p className="education-year">
                  {context.projects.pStartThree} - {context.projects.pEndThree}
                </p>
                <div className="resume-education-school project-box">
                  <p className="education-degree">
                    {context.projects.pTitleThree}
                  </p>
                  <p className="education-university skills">
                    {context.projects.technologyThree}
                  </p>
                  <p className="project-description">
                    {context.projects.pdesThree}
                  </p>
                </div>
              </div>
            </div>
            {/* Internships */}
            <div className="resume-education">
              <div className="resume-education-title">
                <p>Internships</p>
              </div>
              <div className="resume-education-box">
                <p className="education-year">
                  {context.internship.cstartone} - {context.internship.cendone}
                </p>
                <div className="resume-education-school">
                  <p className="education-degree">
                    {context.internship.cnameone}
                  </p>
                  <p className="education-university">
                    {context.internship.croleone}
                  </p>
                </div>
              </div>
              <div className="resume-education-box">
                <p className="education-year">
                  {context.internship.cstarttwo} - {context.internship.cendtwo}
                </p>
                <div className="resume-education-school">
                  <p className="education-degree">
                    {context.internship.cnametwo}
                  </p>
                  <p className="education-university">
                    {context.internship.croletwo}
                  </p>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="resume-certification">
              <div className="certification-title">
                <p>Certifications</p>
              </div>
              <div className="resume-details">
                <ul className="resume-details-items">
                  <li className="resume-details-item">
                    {context.certificate.cerone}
                  </li>
                  <li className="resume-details-item">
                    {context.certificate.certwo}
                  </li>
                  <li className="resume-details-item">
                    {context.certificate.certhree}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Resume;
