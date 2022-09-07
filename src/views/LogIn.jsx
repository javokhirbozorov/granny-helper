require('@babel/register');
const React = require('react');
const Layout = require('./Layout');

function LogIn({ props }) {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center w-50 p-3">
        <form action="/login" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="loginuser" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginpass" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </Layout>
  );
}

module.exports = LogIn;
