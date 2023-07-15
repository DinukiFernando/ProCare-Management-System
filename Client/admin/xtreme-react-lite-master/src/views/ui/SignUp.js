import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [userType, setUserType] = useState('');

  const navigate = useNavigate();

  const handleUserTypeSelection = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on user type
    if (userType === 'doctor') {
      // Logic for doctor form submission
      navigate('/doctor-form');
    } else if (userType === 'nurse') {
      // Logic for nurse form submission
      navigate('/nurse-form');
    } else if (userType === 'guardian') {
      // Logic for guardian form submission
      navigate('/guardian-form');
    } else if (userType === 'admin') {
      // Logic for admin form submission
      navigate('/admin-form');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center m-5'>
        <div className='card'>
          <div className='card-body px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='userType' className='form-label'>User Type:</label>
                <select className='form-select form-select-lg' id="userType" value={userType} onChange={handleUserTypeSelection}>
                  <option value='' disabled>Choose user type</option>
                  <option value='doctor'>Doctor</option>
                  <option value='nurse'>Nurse</option>
                  <option value='guardian'>Guardian</option>
                  <option value='admin'>Admin</option>
                </select>
              </div>
              <button type="submit" className='btn btn-primary btn-lg mb-4'>Next</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
