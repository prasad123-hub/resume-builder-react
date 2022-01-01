import React from "react";
import Context from "../Context/Context";

function StepFour({ nextHandler, previousHandler }) {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>Project Title</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.projects.pTitleOne}
                onChange={context.changepTitleOne}
              />
              <p>Technology</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.projects.technologyOne}
                onChange={context.changetechnologyOne}
              />
              <p>Description</p>
              <input
                type="type"
                className="one-input-one"
                name="email"
                value={context.projects.pdesOne}
                onChange={context.changepDesOne}
              />
              <p>From Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pStartOne}
                onChange={context.changepStartOne}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pEndOne}
                onChange={context.changepEndOne}
              />
              <br />
              <br />
              <br />
              <br />
              <p>Project Title</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.projects.pTitleTwo}
                onChange={context.changepTitleTwo}
              />
              <p>Technology</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.projects.technologyTwo}
                onChange={context.changetechnologyTwo}
              />
              <p>Description</p>
              <input
                type="type"
                className="one-input-one"
                name="email"
                value={context.projects.pdesTwo}
                onChange={context.changepDesTwo}
              />
              <p>From Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pStartTwo}
                onChange={context.changepStartTwo}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pEndTwo}
                onChange={context.changepEndTwo}
              />
              <br />
              <br />
              <br />
              <br />
              <p>Project Title</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.projects.pTitleThree}
                onChange={context.changepTitleThree}
              />
              <p>Technology</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.projects.technologyThree}
                onChange={context.changetechnologyThree}
              />
              <p>Description</p>
              <input
                type="type"
                className="one-input-one"
                name="email"
                value={context.projects.pdesThree}
                onChange={context.changepDesThree}
              />
              <p>From Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pStartThree}
                onChange={context.changepStartThree}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.projects.pEndThree}
                onChange={context.changepEndThree}
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

export default StepFour;
