import React, { useState } from "react";
import PackageContext from "../Context/Context";

const Provider = (props) => {
  const [details, setDetails] = useState({
    fname: "Prasad Narkhedkar",
    role: "FrontEnd Developer",
    phone: "+918888888888",
    email: "prasad@gmail.com",
    address: "Pune / Maharashtra",
  });

  const [bio, setBio] = useState({
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga at debitis porro repellat excepturi quam eos soluta iure, fugiat perspiciatis voluptates, facilis ad quo modi laboriosam!",
  });

  const [education, setEducation] = useState({
    uniOne: "University of Pittsburgh",
    streamOne: "M.S in Computer Science",
    startOne: "2019",
    endOne: "2021",
    uniTwo: "University of Pittsburgh",
    streamTwo: "M.S in Computer Science",
    startTwo: "2019",
    endTwo: "2021",
  });

  const [projects, setProjects] = useState({
    pTitleOne: "Trading Platform",
    technologyOne: "Node.js, Express, Firebase, React, WebSocket",
    pdesOne:
      "A personalized trading platform using other platform's API. This platform allows the user to place multiple orders for multiple clients with a single click.",
    pStartOne: "2020",
    pEndOne: "2021",
    pTitleTwo: "Trading Platform",
    technologyTwo: "Node.js, Express, Firebase, React, WebSocket",
    pdesTwo:
      "A personalized trading platform using other platform's API. This platform allows the user to place multiple orders for multiple clients with a single click.",
    pStartTwo: "2020",
    pEndTwo: "2021",
    pTitleThree: "Trading Platform",
    technologyThree: "Node.js, Express, Firebase, React, WebSocket",
    pdesThree:
      "A personalized trading platform using other platform's API. This platform allows the user to place multiple orders for multiple clients with a single click.",
    pStartThree: "2020",
    pEndThree: "2021",
  });

  const [internship, setInternship] = useState({
    cnameone: "Eastern Coalfield Limited",
    croleone: "Responsible for data analytics for various internal departments",
    cstartone: "2020",
    cendone: "2021",
    cnametwo: "Eastern Coalfield Limited",
    croletwo: "Responsible for data analytics for various internal departments",
    cstarttwo: "2020",
    cendtwo: "2021",
  });

  const [certificate, setCertificate] = useState({
    cerone: "Introduction to MySQL",
    certwo: "Introduction to MySQL",
    certhree: "Introduction to MySQL",
  });

  return (
    <PackageContext.Provider
      value={{
        data: details,
        changeName: (e) => {
          setDetails({ ...details, fname: e.target.value });
        },
        changeRole: (e) => {
          setDetails({ ...details, role: e.target.value });
        },
        changePhone: (e) => {
          setDetails({ ...details, phone: e.target.value });
        },
        changeEmail: (e) => {
          setDetails({ ...details, email: e.target.value });
        },
        changeAddress: (e) => {
          setDetails({ ...details, address: e.target.value });
        },
        bio: bio,
        changeBio: (e) => {
          setBio({ ...bio, bio: e.target.value });
        },
        education: education,
        changeUniOne: (e) => {
          setEducation({ ...education, uniOne: e.target.value });
        },
        changeStreamOne: (e) => {
          setEducation({ ...education, streamOne: e.target.value });
        },
        changeStartOne: (e) => {
          setEducation({ ...education, startOne: e.target.value });
        },
        changeEndOne: (e) => {
          setEducation({ ...education, endOne: e.target.value });
        },
        changeUniTwo: (e) => {
          setEducation({ ...education, uniTwo: e.target.value });
        },
        changeStreamTwo: (e) => {
          setEducation({ ...education, streamTwo: e.target.value });
        },
        changeStartTwo: (e) => {
          setEducation({ ...education, startTwo: e.target.value });
        },
        changeEndTwo: (e) => {
          setEducation({ ...education, endTwo: e.target.value });
        },
        projects: projects,
        changepTitleOne: (e) => {
          setProjects({ ...projects, pTitleOne: e.target.value });
        },
        changetechnologyOne: (e) => {
          setProjects({ ...projects, technologyOne: e.target.value });
        },
        changepDesOne: (e) => {
          setProjects({ ...projects, pdesOne: e.target.value });
        },
        changepStartOne: (e) => {
          setProjects({ ...projects, pStartOne: e.target.value });
        },
        changepEndOne: (e) => {
          setProjects({ ...projects, pEndOne: e.target.value });
        },
        changepTitleTwo: (e) => {
          setProjects({ ...projects, pTitleTwo: e.target.value });
        },
        changetechnologyTwo: (e) => {
          setProjects({ ...projects, technologyTwo: e.target.value });
        },
        changepDesTwo: (e) => {
          setProjects({ ...projects, pdesTwo: e.target.value });
        },
        changepStartTwo: (e) => {
          setProjects({ ...projects, pStartTwo: e.target.value });
        },
        changepEndTwo: (e) => {
          setProjects({ ...projects, pEndTwo: e.target.value });
        },
        changepTitleThree: (e) => {
          setProjects({ ...projects, pTitleThree: e.target.value });
        },
        changetechnologyThree: (e) => {
          setProjects({ ...projects, technologyThree: e.target.value });
        },
        changepDesThree: (e) => {
          setProjects({ ...projects, pdesThree: e.target.value });
        },
        changepStartThree: (e) => {
          setProjects({ ...projects, pStartThree: e.target.value });
        },
        changepEndThree: (e) => {
          setProjects({ ...projects, pEndThree: e.target.value });
        },
        internship: internship,
        changecnameone: (e) => {
          setInternship({ ...internship, cnameone: e.target.value });
        },
        changecroleone: (e) => {
          setInternship({ ...internship, croleone: e.target.value });
        },
        changecstartone: (e) => {
          setInternship({ ...internship, cstartone: e.target.value });
        },
        changecendone: (e) => {
          setInternship({ ...internship, cendone: e.target.value });
        },
        changecnametwo: (e) => {
          setInternship({ ...internship, cnametwo: e.target.value });
        },
        changecroletwo: (e) => {
          setInternship({ ...internship, croletwo: e.target.value });
        },
        changecstarttwo: (e) => {
          setInternship({ ...internship, cstarttwo: e.target.value });
        },
        changecendtwo: (e) => {
          setInternship({ ...internship, cendtwo: e.target.value });
        },
        certificate: certificate,
        changeCerOne: (e) => {
          setCertificate({ ...certificate, cerone: e.target.value });
        },
        changeCerTwo: (e) => {
          setCertificate({ ...certificate, certwo: e.target.value });
        },
        changeCerThree: (e) => {
          setCertificate({ ...certificate, certhree: e.target.value });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
