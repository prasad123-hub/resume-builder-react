import React from "react";
import Context from "../Context/Context";

function StepFive({ nextHandler, previousHandler }) {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>Organization</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.internship.cnameone}
                onChange={context.changecnameone}
              />
              <p>Description</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.internship.croleone}
                onChange={context.changecroleone}
              />
              <p>From Year</p>
              <input
                type="text"
                className="one-input-one"
                name="email"
                value={context.internship.cstartone}
                onChange={context.changecstartone}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.internship.cendone}
                onChange={context.changecendone}
              />
              <br />
              <br />
              <br />
              <br />
              <p>Organization</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.internship.cnametwo}
                onChange={context.changecnametwo}
              />
              <p>Description</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.internship.croletwo}
                onChange={context.changecroletwo}
              />
              <p>From Year</p>
              <input
                type="text"
                className="one-input-one"
                name="email"
                value={context.internship.cstarttwo}
                onChange={context.changecstarttwo}
              />
              <p>To Year</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.internship.cendtwo}
                onChange={context.changecendtwo}
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

export default StepFive;
