const React = require('react');
const Layout = require('./Layout');
// https://via.placeholder.com/300x400
function GrannyProfile({ grannyAlbum, myGranndChild, session  }) {
  return (
    <Layout session={session}>
      <div className="addGrannyWindow">
        <div className="closeGrannyWindow" />
        <div className="input-group">
          <input name="grannySearchInput" type="text" className="form-control grannySearchInput" placeholder="Grand-child email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary grannySearchInputBtn" type="button">Добавить</button>
          </div>
        </div>

        <div className="usersList">
          {
            myGranndChild.map((el) => (
              <div className="alert alert-secondary usersListItem" role="alert" key={el.id}>
                <span name="grannyMail">{el.email}</span>
                <button type="button" className="btn btn-danger sm-0 grannyDeleteBtn" data-id={el.id}>Удалить</button>
              </div>
            ))
          }
        </div>
      </div>

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
              <button className="addGrannyBtn btn btn-secondary">+</button>
              <p className="counter">{myGranndChild.length}</p>
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
          {/* <form id="forming" action="/grandChildProfile" method="POST">
            <div className="input-group mb-3">
              <input name="imglink" type="text" className="form-control imgUrlInput" placeholder="img url" style={{ height: '40px' }}/>
              <div className="input-group-append">
          
                <button  id="start" className="btn btn-outline-secondary addImgBtn" type="submit" style={{
                  borderRadius: '0px 5px 5px 0px',
                  height: '40px',
                  marginBottom: '4px' 
                }}>Add img</button>
              </div>
            </div>
          </form> */}

          <form action="/profile" method="POST" id="forming">
            <div className="mb-3 input-group ">
              <input className="form-control" type="input" id="file" name="imglink" multiple placeholder="img url"style={{ height: '40px',  }}/>
              <select id="voiceList" style={{
                      height: '40px',
                      wordWrap: 'normal',
                      borderRadius: '0',
                      width: '100px'
                }}/>
              <button className="btn btn-primary" type="submit" id="start" style={{
                  borderRadius: '0px 5px 5px 0px',
                  height: '40px',
                  marginBottom: '4px' 
                }}>Add img</button>
            </div>
          </form>

          <div className="post-cards container">
            <div className="row justify-content-center">
              {
                grannyAlbum.map((grannyPost) => (
                  <div className="col-6 card m-3 p-0" key={grannyPost.id} style={{ width: '30rem' }}>
                    <div key={grannyPost.id} className="allcarddiv">
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
