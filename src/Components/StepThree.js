import React from "react";
import Context from "../Context/Context";

function StepThree({ nextHandler, previousHandler }) {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>University/Collage</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.education.uniOne}
                onChange={context.changeUniOne}
              />
              <p>Course/Stream</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.education.streamOne}
                onChange={context.changeStreamOne}
              />
              <p>From Year</p>
              <input
                type="email"
                className="one-input-one"
                name="email"
                value={context.education.startOne}
                onChange={context.changeStartOne}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.education.endOne}
                onChange={context.changeEndOne}
              />
              <br />
              <br />
              <br />
              <br />
              <p>University/Collage</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.education.uniTwo}
                onChange={context.changeUniTwo}
              />
              <p>Course/Stream</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.education.streamTwo}
                onChange={context.changeStreamTwo}
              />
              <p>From Year</p>
              <input
                type="email"
                className="one-input-one"
                name="email"
                value={context.education.startTwo}
                onChange={context.changeStartTwo}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.education.endTwo}
                onChange={context.changeEndTwo}
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

export default StepThree;
