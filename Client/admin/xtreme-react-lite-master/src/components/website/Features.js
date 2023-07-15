import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ShieldIcon from '@mui/icons-material/Shield';

const ImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("https://www.carehome.co.uk/wp-content/uploads/sites/2/2023/05/Nursing-homes-care-for-people-with-healthcare-needs.jpg")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const FeaturesSection = () => {
  const features = [
    {
      icon: <ReceiptIcon />,
      title: 'Commitment',
      description:
        'Our continuous commitment is to provide our patients with unparalleled professionalism. Whether the requirement is home nursing, industrial nursing or the emergency ambulance service, we are committed to render the healthcare support to fulfill all healthcare needs.',
    },
    {
      icon: <CategoryIcon />,
      title: 'Compassion',
      description:
        'As pioneering caregivers of the country, all our services are blended with compassion for our patients. We are well concerned about the physical and mental health condition of our patient.',
    },
    {
      icon: <PhotoLibraryIcon />,
      title: 'Respect',
      description:
        'Respect is a key value behind all our services. We ensure that our health care givers will work with utmost respect and attentiveness to our patients. We are determined to establish a positive culture within the profession through our values.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Ethical',
      description:
        'Our team of health care givers work within an established ethical framework when providing their services. They are trained to perform according to the standards of conduct in order to conform to the ethical norms.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Affordability',
      description:
        'All our health care services are cost-effective and they are provided within affordable rates for the clients. We make sure that our clients can relax in the peace of mind knowing that we are giving value for your money.',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }} data-aos="fade-right">
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardContent>
                      <Box display="flex" justifyContent="center">
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <ImageBox data-aos="zoom-in" />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesSection;
