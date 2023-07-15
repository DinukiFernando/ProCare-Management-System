import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUserNurse, faBed, faAward } from '@fortawesome/free-solid-svg-icons';

function CountsSection() {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <IconButton>
                  <FontAwesomeIcon icon={faUserMd} size="2x" />
                </IconButton>
                <Typography variant="h5" component="p">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="06"
                    data-purecounter-duration="1"
                  ></span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                  <strong>Doctors</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <IconButton>
                  <FontAwesomeIcon icon={faUserNurse} size="2x" />
                </IconButton>
                <Typography variant="h5" component="p">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="68"
                    data-purecounter-duration="1"
                  ></span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                  <strong>Nurses</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <IconButton>
                  <FontAwesomeIcon icon={faBed} size="2x" />
                </IconButton>
                <Typography variant="h5" component="p">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="50"
                    data-purecounter-duration="1"
                  ></span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                  <strong>Rooms</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <IconButton>
                  <FontAwesomeIcon icon={faAward} size="2x" />
                </IconButton>
                <Typography variant="h5" component="p">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="23"
                    data-purecounter-duration="1"
                  ></span>
                </Typography>
                <Typography variant="subtitle1" component="p">
                  <strong>Awards</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default CountsSection;
