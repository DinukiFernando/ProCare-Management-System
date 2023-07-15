import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function CtaSection() {
  return (
    <section id="cta" className="cta">
        <Card>
          <CardContent>
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <Typography variant="h3">Why Choose Us</Typography>
          <Typography variant="body1">
            Throughout the journey, St. Annes Nursing Home has been providing exceptional healthcare services to our customers with commitment. We maintain close relationships with our clients, families, care providers, and other members of our healthcare system in order to provide a premier service. Aiming for excellence, we create personalized plans tailored according to the needs of the clients, and we attach healthcare givers according to the requirements of the client.
          </Typography>
          <Button variant="contained" color="primary" className="cta-btn" href="#appointment">
            Make an Appointment
          </Button>
        </div>
      </div>
      </CardContent>
      </Card>
    </section>
  );
}

export default CtaSection;
