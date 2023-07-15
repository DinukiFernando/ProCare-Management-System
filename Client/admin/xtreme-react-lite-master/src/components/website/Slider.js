import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://www.nursinghomeabusecenter.com/wp-content/uploads/2019/11/happy-seniors-nursing-home.png',
   
  },
  {
    url: 'https://porterchester.edu/sites/default/files/styles/blogfeature_large/public/field/image/NursePatient.jpg?itok=DSOD996D',
    
  },
  {
    url: 'https://ei.marketwatch.com/Multimedia/2019/12/19/Photos/ZH/MW-HX239_nursin_20191219165234_ZH.jpg?uuid=dd09742e-22a9-11ea-b4e5-9c8e992d421e',
    
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} alt={fadeImage.caption} />
            
          </div>
        ))}
      </Fade>
    </div>
  );
};
