import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const NursesSection = () => {
  return (
    <section id="nurses" className="doctors section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nurses</h2>
          <p>
            Introducing our compassionate team of nurses at St. Anne Nursing Home! Our nurses play a crucial role in delivering exceptional care to our residents. With their nurturing nature and unwavering dedication, they provide round-the-clock support and ensure the comfort and safety of every individual. Our nurses administer medications, assist with daily activities, and offer emotional support to both residents and their families. They work closely with doctors and other healthcare professionals to develop personalized care plans and ensure that each resident receives the attention and care they deserve. At St. Anne Nursing Home, our nurses are committed to fostering a warm and caring environment for our residents.
          </p>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="assets/img/nurses/1.jpg"
                  alt="Nishani Silva"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Nishani Silva
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
                  image="assets/img/nurses/n22.jpg"
                  alt="Anusha Perera"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Anusha Perera
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
                  image="assets/img/nurses/n4.png"
                  alt="Nilmini Bandara"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Nilmini Bandara
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
                  image="assets/img/nurses/n6.webp"
                  alt="Kavitha Fernando"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4">
                    Kavitha Fernando
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Chief Medical Officer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Add more nurses here */}
        </Grid>
      </div>
    </section>
  );
};

export default NursesSection;
