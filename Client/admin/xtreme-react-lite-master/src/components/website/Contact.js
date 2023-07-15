import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const ContactSection = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="h2" gutterBottom>
          Contact
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="Google Maps"
          style={{ border: '0', width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15991.189683289369!2d79.83371058120339!3d7.415684887763347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c6aa248a2ed5%3A0x372ba826b38d8334!2sSt.%20Anne&#39;s%20Nursing%20Home!5e0!3m2!1sen!2slk!4v1685203802675!5m2!1sen!2slk"
          width="600"
          height="450"
        //   style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <CardContent>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Our Address</h3>
                    <p>
                      St. Annes Nursing Home, Church Rd,
                      <br />
                      Marawila, Sri Lanka, CR7H+24Q
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      nursingHome456@gmail.com
                      <br />
                      nursingMaraHome46@gmail.com
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+94 322 201 432<br />+94 322 255 812</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
