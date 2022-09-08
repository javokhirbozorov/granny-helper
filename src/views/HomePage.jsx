const React = require('react');
const Layout = require('./Layout');

function MainPage(props) {
  return (
    <Layout title="Home">
      <h1 className="m-auto">What is this platform for?</h1>
      <a href="/login" className="btn btn-lg m-5 btn-success">Log In</a>
      <a href="/sign-up" className="btn btn-lg m-5 btn-primary">Sign Up</a>
    </Layout>
  );
}

module.exports = MainPage;
