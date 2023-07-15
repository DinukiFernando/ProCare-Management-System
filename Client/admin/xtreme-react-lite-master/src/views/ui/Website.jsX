
    import React from 'react';

    class NewComponent extends Component {
      render() {
        return (
          <div>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Procare</title>
            {/* Favicons */}
            <link href="assets/img/my_logo.png" rel="icon" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
            {/* Vendor CSS Files */}
            <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
            <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
            <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
            {/* Template Main CSS File */}
            <link href="assets/css/style.css" rel="stylesheet" />
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
              <div className="container d-flex align-items-center">
                <a href="index2.html" className="logo me-auto"><img src="assets/img/logo2.jpg" alt="" /></a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>
                    <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
                    <li><a className="nav-link scrollto" href="#nurses">Nurses</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                  </ul>
                </nav>{/* .navbar */}
                <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
              </div>
            </header>
            {/* End Header */}
            {/* ======= Hero Section ======= */}
            <section id="hero">
              <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
                <ol className="carousel-indicators" id="hero-carousel-indicators" />
                <div className="carousel-inner" role="listbox">
                  {/* Slide 1 */}
                  <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/New/2.jpg)'}}>
                  </div>
                  {/* Slide 2 */}
                  <div className="carousel-item" style={{backgroundImage: 'url(assets/img/New/3.jpg)'}}>
                  </div>
                  {/* Slide 3 */}
                  <div className="carousel-item" style={{backgroundImage: 'url(assets/img/New/5.jpg)'}}>
                  </div>
                  <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
                  </a>
                  <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
                  </a>
                </div>
              </div></section>{/* End Hero */}
            <main id="main">
              {/* ======= About Us Section ======= */}
              <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>About Us</h2>
                    <p>At St. Annes Nursing Home, we thrive in the mission of caring for people who require our services. As the trailblazer in the industry, we have established a unique identity for being the pioneer in the Home Nursing Care Service in Sri Lanka.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                      <img src="assets/img/2.jpg" className="img-fluid" alt="image" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                      <p className="fst-italic">
                        Going beyond the conventional offering, we are specialized in employing modern, cutting edge healthcare procedures and practices for treating our patients. Providing a wide range of services which meet various demands of the global trends in the health care sector, our aim is to be the productive contributor towards uplifting the healthcare sector of the country.
                      </p>
                      <h4>Our Vision</h4>
                      <p>
                        To be the premier service provider in loss prevention, secure logistics and caring services in Sri Lanka
                      </p>
                      <h4>Our Mission</h4>
                      <p>
                        To provide our customers peace of mind, by setting the highest professional standards in providing solutions in loss prevention, secure logistics and caring services in Sri Lanka whilst giving our employees a challenging, rewarding and fulfilling career
                      </p>
                    </div>
                  </div>
                </div>
              </section>{/* End About Us Section */}
              {/* ======= Cta Section ======= */}
              <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                  <div className="text-center">
                    <h3>Why Choose Us</h3>
                    <p> Throughout the journey, St. Annes Nursing Home has been providing exceptional health care services to our customers with commitment. We maintain close relationships with our clients, families, care providers and other members of our health care system in order to provide a premiere service. Aiming for excellence, we create personalized plans tailored according to the needs of the clients and we attach health care givers according to the requirements of the client.</p>
                    <a className="cta-btn scrollto" href="#appointment">Make an Make an Appointment</a>
                  </div>
                </div>
              </section>{/* End Cta Section */}
              {/* ======= Counts Section ======= */}
              <section id="counts" className="counts">
                <div className="container" data-aos="fade-up">
                  <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="fas fa-user-md" />
                        <span data-purecounter-start={0} data-purecounter-end={68} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Doctors</strong></p>
                        <a href="#">Find out more »</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="fas fa-user-nurse" />
                        <span data-purecounter-start={0} data-purecounter-end={68} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Nurses</strong></p>
                        <a href="#">Find out more »</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="fas fa-bed" />
                        <span data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Rooms</strong></p>
                        <a href="#">Find out more »</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="fas fa-award" />
                        <span data-purecounter-start={0} data-purecounter-end={23} data-purecounter-duration={1} className="purecounter" />
                        <p><strong>Awards</strong></p>
                        <a href="#">Find out more »</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Counts Section */}
              {/* ======= Features Section ======= */}
              <section id="features" className="features">
                <div className="container" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                      <div className="icon-box mt-5 mt-lg-0">
                        <i className="bx bx-receipt" />
                        <h4>Commitment</h4>
                        <p>Our continuous commitment is to provide our patients with unparalleled professionalism. Whether the requirement is home nursing, industrial nursing or the emergency ambulance service, we are committed to render the healthcare support to fulfil all healthcare needs.</p>
                      </div>
                      <div className="icon-box mt-5">
                        <i className="bx bx-cube-alt" />
                        <h4>Compassion</h4>
                        <p>As pioneering caregivers of the country, all our services are blended with compassion for our patients. We are well concerned about the physical and mental health condition of our patient.</p>
                      </div>
                      <div className="icon-box mt-5">
                        <i className="bx bx-images" />
                        <h4>Respect</h4>
                        <p>Respect is a key value behind all our services. We ensure that our health care givers will work with utmost respect and attentiveness to our patients. We are determined to establish a positive culture within the profession through our values.</p>
                      </div>
                      <div className="icon-box mt-5">
                        <i className="bx bx-shield" />
                        <h4>Ethical</h4>
                        <p>Our team of health care givers work within an established ethical framework when providing their services. They are trained to perform according to the standards of conduct in order to conform to the ethical norms.</p>
                      </div>
                      <div className="icon-box mt-5">
                        <i className="bx bx-shield" />
                        <h4>Affordability</h4>
                        <p>All our health care services are cost effective and they are provided within affordable rates for the clients. We make sure that our clients can relax in the peace of mind knowing that we are giving value for your money.</p>
                      </div>
                    </div>
                    <div className="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: 'url("assets/img/1.jpg")'}} data-aos="zoom-in" />
                  </div>
                </div>
              </section>{/* End Features Section */}
              {/* ======= Services Section ======= */}
              <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>Services</h2>
                    <p>St. Annes Nursing Home was founded to fulfill the professional home care services in Sri Lanka. Extending beyond home nursing service, we offer health care services at multiple levels.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon"><i className="fas fa-heartbeat" /></div>
                      <h4 className="title"><a href>Home Nursing Services</a></h4>
                      <p className="description">At St. Annes Nursing Home, we take priority in offering home care services for the patients in need. Our establishment was founded to fill the void in home nursing. An extensive range of home care services are fulfilled by our team of professionals.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon"><i className="fas fa-pills" /></div>
                      <h4 className="title"><a href>Industrial Nursing Services</a></h4>
                      <p className="description">We have extended our hands in industrial nursing services to fulfill health needs of the employees within industrial and commercial establishment. We offer a plethora of services from treating injuries up to organizing medical campaigns to contribute for health service.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={100}>
                      <div className="icon"><i className="fas fa-dna" /></div>
                      <h4 className="title"><a href>Doctor on call 24x7</a></h4>
                      <p className="description">We deliver on call home care doctor visits by experienced and trained doctors for emergency situations and routine check ups.Our patients can avail the services of our health care specialists within the comfort of their home instead of the trouble of visiting the doctor at the clinic.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="icon"><i className="fas fa-wheelchair" /></div>
                      <h4 className="title"><a href>Ambulance Services</a></h4>
                      <p className="description">Our 24 hour ambulance service is equipped with qualified doctors and paramedics along with cutting edge emergency equipment and is available on all days of the week. We are your reliable partner for pre- hospital treatments during medical emergency.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon"><i className="fas fa-notes-medical" /></div>
                      <h4 className="title"><a href>Medical Camp</a></h4>
                      <p className="description">Comprehensive and cost-effective medical care to ensure the health and wellbeing of your employees. We offer tailor-made plans to suit the healthcare requirements of your employees.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={300}>
                      <div className="icon"><i className="fas fa-hospital-user" /></div>
                      <h4 className="title"><a href>Other Services</a></h4>
                      <p className="description">A range of professional medical services at your convenience for the overall health and well-being of you and your loved ones.</p>
                    </div>
                  </div>
                </div>
              </section>{/* End Services Section */}
              {/* ======= Appointment Section ======= */}
              <section id="appointment" className="appointment section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>Make an Appointment</h2>
                  </div>
                  <form action="g_appointments.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row justify-content-center">
                      <div className="col-md-4 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-4 form-group mt-3 mt-md-0">
                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-4 form-group mt-3">
                        <select name="doctor" id="doctor" className="form-select">
                          <option value>Select Doctor</option>
                          <option value="Doctor 1">Dr. Ranasinghe Perera</option>
                          <option value="Doctor 2">Dr. Nimali Fernando</option>
                          <option value="Doctor 3">Dr. Dilshan Silva</option>
                          <option value="Doctor 2">Dr. Amara Bandara</option>
                          <option value="Doctor 3">Dr. Priya Rajapakse</option>
                        </select>
                      </div>
                      <div className="col-md-4 form-group mt-3 ">
                        <div className="input-group date" id="picker">
                          <input type="date" className="form-control" placeholder="Date" name="date" required />
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="form-group col-md-8 mt-3 ">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                      <div className="error-message"> </div>
                    </div>
                    <div className="text-center justify-content-center"><button type="submit">Make an Appointment</button></div>
                  </form>
                </div>
              </section>{/* End Appointment Section */}
              {/* ======= Doctors Section ======= */}
              <section id="doctors" className="doctors section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Introducing our exceptional team of doctors at St. Anne Nursing Home! Our doctors are highly skilled and deeply committed to providing comprehensive medical care to our residents. With their expertise and compassionate approach, they ensure that each individual receives personalized attention and the highest quality of care. Our doctors diagnose and treat medical conditions, collaborate with other healthcare professionals, and work diligently to improve the overall well-being of our residents. At St. Anne Nursing Home, our doctors are dedicated to promoting the health and happiness of those under their care.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/doctors/d1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Dr. Ranasinghe Perera</h4>
                          <span>Chief Medical Officer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={200}>
                        <div className="member-img">
                          <img src="assets/img/doctors/d3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Dr. Dilshan Silva</h4>
                          <span>Anesthesiologist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={400}>
                        <div className="member-img">
                          <img src="assets/img/doctors/d5.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Dr. Priya Rajapakse</h4>
                          <span>Neurosurgeon</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={400}>
                        <div className="member-img">
                          <img src="assets/img/doctors/d611.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Dr. Amara Bandara</h4>
                          <span>Neurosurgeon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Doctors Section */}
              {/* ======= Nurses Section ======= */}
              <section id="nurses" className="doctors section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>Nurses</h2>
                    <p>Introducing our compassionate team of nurses at St. Anne Nursing Home! Our nurses play a crucial role in delivering exceptional care to our residents. With their nurturing nature and unwavering dedication, they provide round-the-clock support and ensure the comfort and safety of every individual. Our nurses administer medications, assist with daily activities, and offer emotional support to both residents and their families. They work closely with doctors and other healthcare professionals to develop personalized care plans and ensure that each resident receives the attention and care they deserve. At St. Anne Nursing Home, our nurses are committed to fostering a warm and caring environment for our residents.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Nishani Silva</h4>
                          <span>Chief Medical Officer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n22.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Anusha Perera</h4>
                          <span>Chief Medical Officer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Nilmini Bandara</h4>
                          <span>Chief Medical Officer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n6.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Kavitha Fernando</h4>
                          <span>Chief Medical Officer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Samanthi Rajapaksa</h4>
                          <span>Registered Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n22.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Chathurika Jayawardena</h4>
                          <span>Registered Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Priyadarshani Gunaratne</h4>
                          <span>Registered Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n6.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Malsha Wijesekara</h4>
                          <span>Registered Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Shalini Ratnayake</h4>
                          <span>Nurse Practitioner</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n22.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Thilini Weerasinghe</h4>
                          <span>Nurse Practitioner</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Chamila de Silva</h4>
                          <span>Nurse Practitioner</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n6.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Tharanga Peramuna</h4>
                          <span>Nurse Practitioner</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Gayani Karunaratne</h4>
                          <span>Clinical Nurse Specialist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n22.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Dilani Mendis</h4>
                          <span>Clinical Nurse Specialist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Amali Fernando</h4>
                          <span>Clinical Nurse Specialist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n6.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Rashmi Wijewardena</h4>
                          <span>Clinical Nurse Specialist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Nadeesha Gunasekara</h4>
                          <span>Geriatric Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={200}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n22.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Tharushi Bandaranaike</h4>
                          <span>Geriatric Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={300}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n4.png" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Sandamali Liyanage</h4>
                          <span>Geriatric Nurse</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                      <div className="member" data-aos="fade-up" data-aos-delay={400}>
                        <div className="member-img">
                          <img src="assets/img/nurses/n6.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="member-info">
                          <h4>Chamari Ratnayake</h4>
                          <span>Geriatric Nurse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Nurses Section */}
              {/* ======= Gallery Section ======= */}
              <section id="gallery" className="gallery">
                <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>Gallery</h2>
                  </div>
                  <div className="gallery-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n1.jpg"><img src="assets/img/gallery/n1.jpg" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n2.jpg"><img src="assets/img/gallery/n2.jpg" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n3.jpg"><img src="assets/img/gallery/n3.jpg" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n4.jpg"><img src="assets/img/gallery/n4.jpg" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n5.jpg"><img src="assets/img/gallery/n5.jpg" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n6.webp"><img src="assets/img/gallery/n6.webp" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n7.png"><img src="assets/img/gallery/n7.png" className="img-fluid" alt="" /></a></div>
                      <div className="swiper-slide"><a className="gallery-lightbox" href="assets/img/gallery/n8.jpg"><img src="assets/img/gallery/n8.jpg" className="img-fluid" alt="" /></a></div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </section>{/* End Gallery Section */}
              {/* ======= Contact Section ======= */}
              <section id="contact" className="contact">
                <div className="container">
                  <div className="section-title">
                    <h2>Contact</h2>
                  </div>
                </div>
                <div>
                <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15991.189683289369!2d79.83371058120339!3d7.415684887763347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c6aa248a2ed5%3A0x372ba826b38d8334!2sSt.%20Anne's%20Nursing%20Home!5e0!3m2!1sen!2slk!4v1685203802675!5m2!1sen!2slk" width={600} height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameborder="0" />

                </div>
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="info-box mt-4">
                            <i className="bx bx-envelope" />
                            <h3>Our Address</h3>
                            <p>St. Annes Nursing Home, Church Rd,<br /> Marawila, Sri Lanka,  CR7H+24Q</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-box mt-4">
                            <i className="bx bx-envelope" />
                            <h3>Email Us</h3>
                            <p>nursingHome456@gmail.com<br />nursingMaraHome46@gmail.com</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-box mt-4">
                            <i className="bx bx-phone-call" />
                            <h3>Call Us</h3>
                            <p>+94 322 201 432<br />+94 322 255 812</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/* End Contact Section */}
            </main>{/* End #main */}
            {/* ======= Footer ======= */}
            <footer id="footer">
              <div className="footer-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="footer-info">
                        <h3>ProCare</h3>
                        <p>
                          St. Annes Nursing Home, Church Rd, Marawila, Sri Lanka<br /><br />
                          <strong>Phone:</strong> +94 322 255 812<br />
                          <strong>Email:</strong> nursingHome456@gmail.com<br />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Doctors</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Nurses</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Appointments</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Home Nursing Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Industrial Nursing Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Doctor on call 24x7</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Ambulance Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Medical Camp</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Other Services</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="copyright">
                  © Copyright <strong><span>St. Annes Nursing Home</span></strong>. All Rights Reserved
                </div>
              </div>
            </footer>{/* End Footer */}
            <div id="preloader" />
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            {/* Vendor JS Files */}
            {/* Template Main JS File */}
          </div>
        );
      }
    }
    
    export default NewComponent;
