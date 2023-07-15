import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';

const Feeds = () => {
  const [nurseData, setNurseData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/nurse-ratings')
      .then(response => response.json())
      .then(data => setNurseData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const renderStars = rating => {
    const totalStars = 5;
    const filledStars = parseInt(rating);
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <i key={index} className="bi bi-star-fill text-warning"></i>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={index} className="bi bi-star text-warning"></i>
        ))}
      </>
    );
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Nurse Ratings</CardTitle>
        <CardText className="mb-2 text-muted">Recent Nurse Ratings</CardText>
        {nurseData.map((nurse, index) => (
          <div key={index} className="mb-3">
            <strong>{nurse.first_name}</strong>
            <br />
            <small>{nurse.area_of_expertise}</small>
            <div className="mt-2">
              Total Rating: {renderStars(nurse.total_rating)}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default Feeds;
