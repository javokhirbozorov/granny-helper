const React = require('react');
const Layout = require('./Layout');

function GrandChildProfile({ grannyAlbum, myGranny, session }) {
  // console.log(myGranny)
  return (
    <Layout session={session}>
      <div className="addGrannyWindow">
        <div className="closeGrannyWindow" />
        <div className="input-group">
          <input name="grannySearchInput" type="text" className="form-control grannySearchInput" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary grannySearchInputBtn" type="button">Добавить</button>
          </div>
        </div>

        <div className="usersList">
          {/* {
            myGranny.map(el => (
              <div className="alert alert-secondary usersListItem" role="alert">
                <span name='grannyMail'>{el.email}</span>
          {
            myGranny.map((el) => (
              <div className="alert alert-secondary usersListItem" role="alert" key={el.id}>
                <span name="grannyMail">{el.email}</span>
                <button type="button" className="btn btn-danger sm-0 grannyDeleteBtn" data-id={el.id}>Удалить</button>
              </div>
            ))
          } */}
        </div>
      </div>

      <main className="w-75 m-auto">
        <section className="container hero d-flex justify-content-between" id="hero">
          <div className="profile-img col-3">
            <img src="https://via.placeholder.com/150" className="profile-img m-auto" alt="" srcSet="" />
            <p className="username text-center">Grand Child</p>
          </div>

          <div className="stats d-inline-flex justify-content-between">
            <div className="col-3 grandchild-count d-flex flex-column align-items-center m-5">
              {' '}
              <div className="grannyWrap" style={{ display: 'flex', alignItems: 'center', height: `${40}px` }}>
                <p>Grannies</p>
                <button className="addGrannyBtn btn btn-secondary">+</button>
              </div>
              <p className="counter">{myGranny.length}</p>
            </div>
          </div>

          <div className="bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon">
                  <strong>
                    –––
                    {' '}
                    <br />
                    –––
                    {' '}

                  </strong>
                </span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        /
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="container post-section">
          <hr />
          <hr />
          <form id="addImgForm" action="/grandChildProfile" method="POST">
            <div className="input-group mb-3">
              <input name="imgUrlInput" type="text" className="form-control imgUrlInput" placeholder="img url" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary addImgBtn" type="submit">Add img</button>
              </div>
            </div>
          </form>

          <div className="post-cards container">
            <div className="row justify-content-center postsList">
              {
              grannyAlbum.map((grannyPost) => (
                <div className="col-6 card m-3 p-0" key={grannyPost.id} style={{ width: '30rem' }}>
                  <img src={grannyPost.imglink} className="card-img-top h-3" alt="Granny Post" style={{ width: '30rem', height: '12rem' }} />
                </div>
              ))
              }
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

module.exports = GrandChildProfile;
