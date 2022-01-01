import React, { useState } from "react";

import "../Styles/Editors.css";
import Resume from "./Resume";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Provider from "../Context/Provider";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

function Editors() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  // const print = () => {
  //   const doc = new jsPDF();
  //   const resume = document.getElementById("resume");
  //   doc.text(`${resume}`, 10, 10);
  //   doc.save("Resume.pdf");
  // };

  const steps = [
    <StepOne nextHandler={nextHandler} />,
    <StepTwo nextHandler={nextHandler} previousHandler={previousHandler} />,
    <StepThree nextHandler={nextHandler} previousHandler={previousHandler} />,
    <StepFour nextHandler={nextHandler} previousHandler={previousHandler} />,
    <StepFive nextHandler={nextHandler} previousHandler={previousHandler} />,
    <StepSix />,
  ];

  const printCv = () => {
    window.print();
  };

  return (
    <Provider>
      <div className="editor-outer">
        <div className="editor-inner">
          <div className="editor-inner-left">
            <p className="editor-inner-left-title">Action Window</p>
            <div className="action-window">{steps[currentStep]}</div>
          </div>
          <div className="editor-inner-right">
            <div className="editor-inner-right-title">
              <p>Template View</p>
              <p onClick={printCv}>Download</p>
            </div>
            <div
              className="action-window action-window-right"
              id="section-to-print"
            >
              <Resume />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Editors;
