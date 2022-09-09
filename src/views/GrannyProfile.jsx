const React = require('react');
const Layout = require('./Layout');
// https://via.placeholder.com/300x400
function GrannyProfile({ album, session }) {
  return (
    <Layout session={session}>
      <main className="w-75 m-auto">
        <section className="container hero d-flex justify-content-between" id="hero">
          <div className="profile-img col-3">
            <img src="https://via.placeholder.com/150" className="profile-img m-auto" />
            <p className="username text-center">User Name</p>
          </div>

          <div className="stats d-inline-flex justify-content-between">
            <div className="col-3 friend-count d-flex flex-column align-items-center m-5">
              <p>Friends</p>
              <p className="counter">0</p>
            </div>
            <div className="col-3 grandchild-count d-flex flex-column align-items-center m-5">
              {' '}
              <p>Grandchildren</p>
              <p className="counter">0</p>
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

                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="container post-section">
          <hr />
          <hr />
          {/* <form action="/profile" method="POST" id="forming">
            <div className="mb-3 input-group ">
              <label htmlFor="formFileMultiple" className="form-label">
                Uplad photos here
                <input className="form-control" type="input" id="file" name="imglink" multiple />
              </label>
            </div>
            <button className="btn btn-primary" type="submit" id="start">Add</button>
          </form> */}

          <form action="/profile/upload" method="post" encType="multipart/form-data">
            <input type="file" name="images" />
            <button type="submit">Add</button>
          </form>

          <div className="post-cards container">
            <div className="row justify-content-center">
              <select id="voiceList" />
              {
            album.map((grannyPost) => (
              <div key={grannyPost.id} className="allcarddiv">
                <div className="col-6 card m-3 p-0" key={grannyPost.id} style={{ width: '30rem' }}>
                  <img src={grannyPost.imglink} className="card-img-top h-3" alt="Granny Post" style={{ width: '30rem', height: '12rem' }} />
                  <div className="card-body">
                    <h5 className="card-title">Text</h5>
                    <p className="card-text">{grannyPost.imgText}</p>
                    <button className="btn btn-success btn-lg play" type="submit" key={grannyPost.id}>Play</button>
                  </div>
                </div>
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

module.exports = GrannyProfile;
