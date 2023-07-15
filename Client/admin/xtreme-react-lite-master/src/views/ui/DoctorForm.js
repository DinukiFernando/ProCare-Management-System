import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const usernameRegex = /^[a-zA-Z0-9]*$/;
    const phoneNumberRegex = /^\d{10}$/;
    const nicNumberRegex = /^\d{12}$/;
    const licenseNumberRegex = /^\d{6}[a-zA-Z]{1}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !nameRegex.test(firstName)) {
      errors.firstName = 'Please enter a valid first name';
    }
    if (!lastName || !nameRegex.test(lastName)) {
      errors.lastName = 'Please enter a valid last name';
    }
    if (!birthday) {
      errors.birthday = 'Please enter a valid birthday';
    }
    if (!gender) {
      errors.gender = 'Please select a gender';
    }
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!phoneNumber || !phoneNumberRegex.test(phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!nicNumber || !nicNumberRegex.test(nicNumber)) {
      errors.nicNumber = 'Please enter a valid NIC number';
    }
    if (!licenseNumber || !licenseNumberRegex.test(licenseNumber)) {
      errors.licenseNumber = 'Please enter a valid license number';
    }
    if (!addressLine1) {
      errors.addressLine1 = 'Please enter address line 1';
    }
    if (!specialty) {
      errors.specialty = 'Please select a specialty';
    }
    if (!password || password.length < 8 || !usernameRegex.test(password)) {
      errors.password = 'Password must be at least 8 characters long and can only contain letters and numbers';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

  

    // Send form data to the server
    const formData = {
      first_name: firstName,
      last_name: lastName,
      username,
      birthday,
      gender,
      email,
      phone_number: phoneNumber,
      specialization: specialty,
      nic_number: nicNumber,
      license_number: licenseNumber,
      address_line1: addressLine1,
      address_line2: addressLine2,
      address_line3: addressLine3,
      
      password
    };
      // Alert to display the form data
  alert(JSON.stringify(formData));

    try {
      const response = await axios.post('http://localhost:4000/doctor-personal-details', formData);
      if (response.status === 201) {
        setFirstName('');
        setLastName('');
        setUsername('');
        setBirthday('');
        setGender('');
        setEmail('');
        setPhoneNumber('');
        setSpecialty('');
        setNicNumber('');
        setLicenseNumber('');
        setAddressLine1('');
        setAddressLine2('');
        setAddressLine3('');
        
        setPassword('');
        setConfirmPassword('');
        setSuccessMessage('Doctor added successfully');
        setErrors({});
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error and display an appropriate message to the user
      setErrors({ serverError: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <div className='container-fluid'>
      <div className='card'>
        <div className='card-body px-4'>
          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Doctor Registration Form</h3>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='lastName' className='form-label'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='birthday' className='form-label'>
                    Birthday
                  </label>
                  <input
                    type='date'
                    id='birthday'
                    className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                  {errors.birthday && <div className='invalid-feedback'>{errors.birthday}</div>}
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Gender</label>
                  <div className='form-check'>
                    <input
                      type='radio'
                      className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                      id='male'
                      name='gender'
                      value='male'
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor='male' className='form-check-label'>
                      Male
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      type='radio'
                      className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                      id='female'
                      name='gender'
                      value='female'
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor='female' className='form-check-label'>
                      Female
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      type='radio'
                      className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                      id='other'
                      name='gender'
                      value='other'
                      checked={gender === 'other'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor='other' className='form-check-label'>
                      Other
                    </label>
                  </div>
                  {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='phoneNumber' className='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber && <div className='invalid-feedback'>{errors.phoneNumber}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='specialty' className='form-label'>
                    Specialty
                  </label>
                  <select
                    id='specialty'
                    className={`form-select ${errors.specialty ? 'is-invalid' : ''}`}
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  >
                    <option value=''>Choose a specialty</option>
                    <option value='General Practitioner'>General Practitioner</option>
                    <option value='Internal Medicine Specialist'>Internal Medicine Specialist</option>
                    <option value='Psychiatrist'>Psychiatrist</option>
                    <option value='Cardiology'>Cardiology</option>
                  </select>
                  {errors.specialty && <div className='invalid-feedback'>{errors.specialty}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='nicNumber' className='form-label'>
                    NIC Number
                  </label>
                  <input
                    type='text'
                    id='nicNumber'
                    className={`form-control ${errors.nicNumber ? 'is-invalid' : ''}`}
                    value={nicNumber}
                    onChange={(e) => setNicNumber(e.target.value)}
                  />
                  {errors.nicNumber && <div className='invalid-feedback'>{errors.nicNumber}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='licenseNumber' className='form-label'>
                    License Number
                  </label>
                  <input
                    type='text'
                    id='licenseNumber'
                    className={`form-control ${errors.licenseNumber ? 'is-invalid' : ''}`}
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />
                  {errors.licenseNumber && <div className='invalid-feedback'>{errors.licenseNumber}</div>}
                </div>
              </div>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label htmlFor='addressLine1' className='form-label'>
                    Address Line 1
                  </label>
                  <input
                    type='text'
                    id='addressLine1'
                    className={`form-control ${errors.addressLine1 ? 'is-invalid' : ''}`}
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                  {errors.addressLine1 && <div className='invalid-feedback'>{errors.addressLine1}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='addressLine2' className='form-label'>
                    Address Line 2
                  </label>
                  <input
                    type='text'
                    id='addressLine2'
                    className='form-control'
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='addressLine3' className='form-label'>
                    Address Line 3
                  </label>
                  <input
                    type='text'
                    id='addressLine3'
                    className='form-control'
                    value={addressLine3}
                    onChange={(e) => setAddressLine3(e.target.value)}
                  />
                </div>
               
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                </div>
                <div className='mb-3'>
                  <label htmlFor='confirmPassword' className='form-label'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    id='confirmPassword'
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && <div className='invalid-feedback'>{errors.confirmPassword}</div>}
                </div>
              </div>
            </div>
            {errors.serverError && <div className='alert alert-danger'>{errors.serverError}</div>}
            {successMessage && <div className='alert alert-success'>{successMessage}</div>}
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

