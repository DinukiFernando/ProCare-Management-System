import React from 'react';

function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#BFEFFF' }}>
      <div className="container py-5">
        {/* <div className="row">
          <div className="col">
            <nav className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active">User Profile</li>
              </ol>
            </nav>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                   <button className="btn btn-primary">Edit the Profile</button>
                  {/*<button className="btn btn-outline-primary ms-1">
                    Message
                  </button> */}
                </div>
              </div>
            </div>

            {/* <div className="card">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <span>https://mdbootstrap.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-github fa-lg"
                      style={{ color: '#333333' }}
                    ></i>
                    <span>mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-twitter fa-lg"
                      style={{ color: '#55acee' }}
                    ></i>
                    <span>@mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ color: '#ac2bac' }}
                    ></i>
                    <span>mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-facebook fa-lg"
                      style={{ color: '#3b5998' }}
                    ></i>
                    <span>mdbootstrap</span>
                  </li>
                </ul>
              </div>
            </div>*/}
          </div> 
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Username</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">
                      example@example.com
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Birthday</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>

                
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Specialization</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">NIC Number</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">License Number</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
                
                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <p className="card-text">Password</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="card-text text-muted">(098) 765-4321</p>
                  </div>
                </div>
                
                <hr />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
