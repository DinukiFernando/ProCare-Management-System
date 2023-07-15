
import { Slideshow } from '../components/website/Slider';
import Header from '../components/website/Header';
import AboutSection from '../components/website/AboutUs';
import Cta from '../components/website/Cta';
import Count from '../components/website/Count';
import Features from '../components/website/Features';
import Service from '../components/website/Services';
import Appoinments from '../components/website/Appointments';
import Doctor from '../components/website/Doctors';
import Nurses from '../components/website/Nurses';
import Contact from '../components/website/Contact';
import Footer from '../components/website/Footer';

function NursingHomeWebsite() {
    return (
        <diV>
         
         <Header />
         <Slideshow />
         <AboutSection />
         <hr/>
         <Cta />
         <hr />
         <Count />
         <hr />
         <Features />
         <hr />
         <Service />
         <hr />
         <Appoinments />
         <hr />
         <Doctor />
         <hr />
         <Nurses />
         <hr />
         <Contact />
         <hr />
         <Footer />

     </diV>
    );
}

export default NursingHomeWebsite;
