import React from "react";
import "../Styles/StepOne.css";

import Context from "../Context/Context";

function StepSix() {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>Certificate One</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.certificate.cerone}
                onChange={context.changeCerOne}
              />
              <p>Certificate Two</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.certificate.certwo}
                onChange={context.changeCerTwo}
              />
              <p>Certificate Three</p>
              <input
                type="email"
                className="one-input-one"
                name="email"
                value={context.certificate.certhree}
                onChange={context.changeCerThree}
              />
            </form>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default StepSix;
