import React from "react";
import Context from "../Context/Context";

function StepTwo({ nextHandler, previousHandler }) {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>Your Bio</p>
              <input
                type="text"
                className="one-input-one"
                name="bio"
                value={context.bio.bio}
                onChange={context.changeBio}
              />

              <button
                type="submit"
                className="one-submit"
                onClick={previousHandler}
              >
                Back
              </button>
              <button
                type="submit"
                className="one-submit"
                onClick={nextHandler}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default StepTwo;
