const React = require('react');

function Layout({ title, children, session }) {
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

        {/* <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" href="/stylesheets/application.css" /> */}
<<<<<<< HEAD

        {/* <script defer src="/js/application.js" /> */}
        {/* <script defer src="/js/client.js" /> */}
=======
        <script defer src="/js/application.js" />
        <script defer src="/js/client.js" />
>>>>>>> f72895131facc85a14d9ebf3d0f55a8dc4e79181
        <link rel="stylesheet" href="/css/styles.css" />
        <title>{title}</title>
      </head>
      <body>

        <header>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <nav className="navbar bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src="https://cdn.freelance.ru/img/portfolio/pics/00/29/E3/2745317.jpg?mt=c291372b" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                  Granny.com
                </a>
              </div>
            </nav>

            <div className="collapse navbar-collapse sm-2" id="navbarNav">

              {
                  (!session)
                    ? (
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="/login">Войти</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/sign-up">Регистрация</a>
                        </li>
                      </ul>
                    )
                    : (
                      <nav className="navbar bg-light">
                        <div className="container-fluid d-flex mb-3">
                          <ul className="navbar-nav  ">
                            <li className="nav-item p-2">
                              <a className="nav-link" href="/profile">Профиль</a>
                            </li>
                            <li className="nav-item p-2">
                              <a className="nav-link" href="/logout">Выход</a>
                            </li>
                          </ul>
                          <span className="nav-text">
                            Привет,
                            {' '}
                            {session.user}
                          </span>
                        </div>
                      </nav>
                    )

                }

            </div>

          </nav>

        </header>
        {children}

      </body>
    </html>
  );
}

module.exports = Layout;
