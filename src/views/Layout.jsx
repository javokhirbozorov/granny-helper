const React = require('react');


function Layout({ title, children }) {

  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <title>{title}</title>
    </head>
    <body>
      
    <header>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <h2>Granny.com</h2>

        <div className="collapse navbar-collapse sm-2" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/granny.com/main">Главная<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/granny.com/profile">Профиль</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/granny.com">Выход</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Войти<span className="sr-only">(current)</span></a>
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
  )
}

module.exports = Layout;