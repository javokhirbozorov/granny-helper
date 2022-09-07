const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />

        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" />

        <script defer src="/js/application.js" />
        <link rel="stylesheet" href="/css/styles.css" />
        <title>{title}</title>
      </head>
      <body>

        <header>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <h2>Granny.com</h2>

            <div className="collapse navbar-collapse sm-2" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/granny.com/main">
                    Главная
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/granny.com/profile">Профиль</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/granny.com">Выход</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Войти
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Регистрация</a>
                </li>
              </ul>
            </div>

          </nav>

        </header>
        {children}

      </body>
    </html>
  );
}

module.exports = Layout;
