import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <Card>
          <CardContent>
            <div className="section-title">
              <Typography variant="h4" component="h2">
                About Us
              </Typography>
              <Typography variant="body1">
                At St. Annes Nursing Home, we thrive in the mission of caring for people who require our services. As the trailblazer in the industry, we have established a unique identity for being the pioneer in the Home Nursing Care Service in Sri Lanka.
              </Typography>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <img src="https://lh3.googleusercontent.com/p/AF1QipPOmJqXfB6RF6LijLe2kCadP5ateUAuyw_F-Y_L=s1600-w400" className="img-fluid" alt="image" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                <Typography variant="body1" className="fst-italic">
                  Going beyond the conventional offering, we are specialized in employing modern, cutting-edge healthcare procedures and practices for treating our patients. Providing a wide range of services which meet various demands of the global trends in the healthcare sector, our aim is to be the productive contributor towards uplifting the healthcare sector of the country.
                </Typography>
                <Typography variant="h6">Our Vision</Typography>
                <Typography variant="body1">
                  To be the premier service provider in loss prevention, secure logistics, and caring services in Sri Lanka
                </Typography>
                <Typography variant="h6">Our Mission</Typography>
                <Typography variant="body1">
                  To provide our customers peace of mind, by setting the highest professional standards in providing solutions in loss prevention, secure logistics, and caring services in Sri Lanka whilst giving our employees a challenging, rewarding, and fulfilling career
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutSection;

