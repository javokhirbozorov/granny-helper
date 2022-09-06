const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- CSS only --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />

        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />

        <script defer src="/js/application.js" />

        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
