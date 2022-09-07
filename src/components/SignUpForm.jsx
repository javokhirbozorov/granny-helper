const React = require('react');

module.exports = function SignUPForm() {
  return (
    <form className="  d-flex flex-column align-items-center justify-content-center  m-auto" action="/sign-up" method="POST">
      <div className="">
        <label htmlFor="nameInput" className="form-label">
          Name
          <input name="nameInput" type="text" className="form-control" id="nameInput" />
        </label>
      </div>
      <div className="">
        <label htmlFor="emailInput" className="form-label">
          Email
          <input name="emailInput" type="email" className="form-control" id="emailInput" />
        </label>
      </div>
      <div className="">
        <label htmlFor="passwordInput" className="form-label">
          Password
          <input name="passwordInput" type="password" className="form-control" id="passwordInput"/>
        </label>
      </div>

      <div className="">
        <label htmlFor="inputState" className="form-label">
          State
          <select id="inputState" className="form-select" name="status">
            <option defaultValue>Grandparent</option>
            <option>Grandchild</option>
          </select>
        </label>
      </div>

      <div className="">
        <button type="submit" className="btn btn-primary">Sign up</button>
      </div>
    </form>
  );
};
