import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const ServicesSection = () => {
  const services = [
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: 'Home Nursing Services',
      description:
        'At St. Annes Nursing Home, we take priority in offering home care services for the patients in need. Our establishment was founded to fill the void in home nursing. An extensive range of home care services is fulfilled by our team of professionals.',
    },
    {
      icon: <LocalHospitalIcon fontSize="large" />,
      title: 'Industrial Nursing Services',
      description:
        'We have extended our hands in industrial nursing services to fulfill the health needs of the employees within industrial and commercial establishments. We offer a plethora of services from treating injuries up to organizing medical campaigns to contribute to health service.',
    },
    {
      icon: <MedicalServicesIcon fontSize="large" />,
      title: 'Doctor on Call 24x7',
      description:
        'We deliver on-call home care doctor visits by experienced and trained doctors for emergency situations and routine check-ups. Our patients can avail the services of our healthcare specialists within the comfort of their home instead of the trouble of visiting the doctor at the clinic.',
    },
    {
      icon: <LocalPharmacyIcon fontSize="large" />,
      title: 'Ambulance Services',
      description:
        'Our 24-hour ambulance service is equipped with qualified doctors and paramedics along with cutting-edge emergency equipment and is available on all days of the week. We are your reliable partner for pre-hospital treatments during medical emergencies.',
    },
    {
      icon: <AccessibilityNewIcon fontSize="large" />,
      title: 'Medical Camp',
      description:
        'Comprehensive and cost-effective medical care to ensure the health and well-being of your employees. We offer tailor-made plans to suit the healthcare requirements of your employees.',
    },
    {
      icon: <LocalLibraryIcon fontSize="large" />,
      title: 'Other Services',
      description:
        'A range of professional medical services at your convenience for the overall health and well-being of you and your loved ones.',
    },
  ];

  const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[2],
    '& .MuiCardHeader-root': {
      paddingBottom: 0,
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  }));

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Services
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          St. Annes Nursing Home was founded to fulfill the professional home care services in Sri Lanka. Extending
          beyond home nursing service, we offer health care services at multiple levels.
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={100 * index}>
              <StyledCard>
                <CardHeader title={service.title} disableTypography />
                <CardContent>
                  <IconBox>{service.icon}</IconBox>
                  <Typography variant="body2" align="left" component="p" gutterBottom>
                    {service.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default ServicesSection;
