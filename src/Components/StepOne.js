import React from "react";
import "../Styles/StepOne.css";

import Context from "../Context/Context";

function StepOne({ nextHandler }) {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="one-outer">
          <div className="one-inner">
            <form>
              <p>Full Name</p>
              <input
                type="text"
                className="one-input-one"
                name="full_name"
                value={context.data.fname}
                onChange={context.changeName}
              />
              <p>Role</p>
              <input
                type="text"
                className="one-input-one"
                name="role"
                value={context.data.role}
                onChange={context.changeRole}
              />
              <p>Email</p>
              <input
                type="email"
                className="one-input-one"
                name="email"
                value={context.data.email}
                onChange={context.changeEmail}
              />
              <p>Phone</p>
              <input
                type="text"
                className="one-input-one"
                name="phone"
                value={context.data.phone}
                onChange={context.changePhone}
              />
              <p>Address</p>
              <input
                type="text"
                className="one-input-one"
                name="address"
                value={context.data.address}
                onChange={context.changeAddress}
              />

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

export default StepOne;
