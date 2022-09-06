const React = require('react');
const Layout = require('./Layout');

const SignUPForm = require('../components/SignUpForm');

module.exports = function SignUP() {
  return (
    <Layout title="Sign Up">
      <SignUPForm />
    </Layout>
  );
};
