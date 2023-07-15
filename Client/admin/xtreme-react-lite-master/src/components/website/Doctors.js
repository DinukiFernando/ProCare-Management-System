import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DoctorsSection = () => {
  return (
    <section id="doctors" className="doctors section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
            Introducing our exceptional team of doctors at St. Anne Nursing Home! Our doctors are highly skilled and deeply committed to providing comprehensive medical care to our residents. With their expertise and compassionate approach, they ensure that each individual receives personalized attention and the highest quality of care. Our doctors diagnose and treat medical conditions, collaborate with other healthcare professionals, and work diligently to improve the overall well-being of our residents. At St. Anne Nursing Home, our doctors are dedicated to promoting the health and happiness of those under their care.
          </p>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/img/doctors/d1.jpg"
                  alt="Dr. Ranasinghe Perera"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Dr. Ranasinghe Perera
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Chief Medical Officer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/img/doctors/d3.jpg"
                  alt="Dr. Dilshan Silva"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Dr. Dilshan Silva
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Anesthesiologist
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/img/doctors/d5.jpg"
                  alt="Dr. Priya Rajapakse"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Dr. Priya Rajapakse
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Neurosurgeon
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/img/doctors/d611.jpg"
                  alt="Dr. Amara Bandara"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Dr. Amara Bandara
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Neurosurgeon
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default DoctorsSection;
