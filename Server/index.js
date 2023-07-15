
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// Define your routes here

const port = 4000; // Change this as per your preference
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: 'DRFdrf2001*', // Replace with your MySQL password
  database: 'nursinghomedb', // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});



//romms
app.get('/api/rooms', (req, res) => {
  const query = 'SELECT * FROM room'; // Query to fetch all room data
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); // Send the room data as a response
  });
});

app.post('/api/rooms', (req, res) => {
  const { roomId, roomType, roomStatus, floor, OccupantInfo } = req.body;
  const query = 'INSERT INTO room (roomId, roomType, roomStatus, floor, OccupantInfo) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [roomId, roomType, roomStatus, floor, OccupantInfo], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'Room added successfully' });
  });
});

app.delete('/api/rooms/:id', (req, res) => {
  const roomId = req.params.id;
  const query = 'DELETE FROM room WHERE roomId = ?';
  connection.query(query, [roomId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Room deleted successfully' });
  });
});







//doctor details
app.get('/api/doctorDetails', (req, res) => {
  const query = 'SELECT * FROM doctorsdetails'; // Query to fetch all room data
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); // Send the room data as a response
  });
});

app.delete(`/api/doctorDetails/:doctor_id`, (req, res) => {
  const doctor_id = req.params.doctor_id;
  const query = 'DELETE FROM doctorsdetails WHERE doctor_id = ?';
  connection.query(query, [doctor_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Doctor deleted successfully' });
  });
});



app.post("/api/doctorDetails", async (req, res) => {
  
    // Get the latest inserted `id` from the `doctorsdetails` table
    const getLastInsertedIdQuery = "SELECT id FROM doctorsdetails ORDER BY id DESC LIMIT 1";
    const [lastInsertedId] = await executeQuery(getLastInsertedIdQuery);

    // Generate the next `doctor_id` based on the latest `id`
    let nextDoctorId = `DOC001`; // Default value if there are no existing doctors

    if (lastInsertedId && lastInsertedId.id) {
      const nextId = lastInsertedId.id + 1;
      nextDoctorId = `DOC${String(nextId).padStart(3, "0")}`;
    }

    const query =
      "INSERT INTO doctorsdetails (doctor_id, first_name, last_name, birthday, gender, email, phone_number, address_line1, address_line2, address_line3, specialization, nic_number, license_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const params = [
      nextDoctorId,
      req.body.first_name,
      req.body.last_name,
      req.body.birthday,
      req.body.gender,
      req.body.email,
      req.body.phone_number,
      req.body.address_line1,
      req.body.address_line2,
      req.body.address_line3,
      req.body.specialization,
      req.body.nic_number,
      req.body.license_number
    ];

    await executeQuery(query, params);
    res.sendStatus(200);
 
    console.error("Error adding doctor:", error);
    res.status(500).json({ error: "Failed to add doctor" });
  
});


// appointments
app.get('/api/appointments', (req, res) => {
  const query = 'SELECT * FROM appointments'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/appointments/:appointment_id`, (req, res) => {
  const appointment_id = req.params.doctor_id;
  const query = 'DELETE FROM appointments WHERE appointment_id = ?';
  connection.query(query, [appointment_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Appointment deleted successfully' });
  });
});


//patient personal information
app.get('/api/patient-personal-details', (req, res) => {
  const query = 'SELECT * FROM patientpersonaldetails'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/patient-personal-details/:id`, (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM patientpersonaldetails WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Patient deleted successfully' });
  });
});


//patient medical history
app.get('/api/patient-medical-history', (req, res) => {
  const query = 'SELECT * FROM medicalhistory'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/patient-medical-history/:patient_id`, (req, res) => {
  const patient_id = req.params.patient_id;
  const query = 'DELETE FROM medicalhistory WHERE patient_id = ?';
  connection.query(query, [patient_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Medical history deleted successfully' });
  });
});



//guardian details
app.get('/api/guardian-details', (req, res) => {
  const query = 'SELECT * FROM guardiandetails'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/guardian-details/:guardian_id`, (req, res) => {
  const guardian_id = req.params.guardian_id;
  const query = 'DELETE FROM guardiandetails WHERE guardian_id = ?';
  connection.query(query, [guardian_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Guardian deleted successfully' });
  });
});



//nurse details
app.get('/api/nurse-details', (req, res) => {
  const query = 'SELECT * FROM nursesdetails'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/nurse-details/:nurse_id`, (req, res) => {
  const nurse_id = req.params.nurse_id;
  const query = 'DELETE FROM nursesdetails WHERE nurse_id = ?';
  connection.query(query, [nurse_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Nurse deleted successfully' });
  });
});



app.post('/api/nurse-details', async (req, res) => {
  const {
    first_name,
    last_name,
    birthday,
    gender,
    email,
    phone_number,
    address_line1,
    address_line2,
    address_line3,
    area_of_expertise,
    nic_number,
  } = req.body;

  try {
    const insertQuery =
      'INSERT INTO nursesdetails (first_name, last_name, birthday, gender, email, phone_number, address_line1, address_line2, address_line3, area_of_expertise, nic_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id';
    const insertValues = [
      first_name,
      last_name,
      birthday,
      gender,
      email,
      phone_number,
      address_line1,
      address_line2,
      address_line3,
      area_of_expertise,
      nic_number,
    ];

    const insertResult = await pool.query(insertQuery, insertValues);
    const generatedId = insertResult.rows[0].id;

    const updateQuery = 'UPDATE nursesdetails SET nurse_id = $1 WHERE id = $2';
    const updateValues = [`NUS${String(generatedId).padStart(3, '0')}`, generatedId];

    await pool.query(updateQuery, updateValues);
    
    res.sendStatus(200);
  } catch (error) {
    console.error('Error adding nurse:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//admin details
app.get('/api/admin-details', (req, res) => {
  const query = 'SELECT * FROM admindetails'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/admin-details/:admin_id`, (req, res) => {
  const admin_id = req.params.admin_id;
  const query = 'DELETE FROM admindetails WHERE admin_id = ?';
  connection.query(query, [admin_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Admin deleted successfully' });
  });
});




//patient-registration-details
app.get('/api/patient-registration-details', (req, res) => {
  const query = `
    SELECT
      SUM(CASE WHEN p.gender = 'Male' THEN 1 ELSE 0 END) AS maleCount,
      SUM(CASE WHEN p.gender = 'Female' THEN 1 ELSE 0 END) AS femaleCount
    FROM
      patient_registration r
    JOIN
      patientpersonaldetails p ON r.patient_id = p.patient_id
    WHERE
      MONTH(r.registration_date) BETWEEN 1 AND 8
    GROUP BY
      MONTH(r.registration_date)
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const maleCounts = results.map((row) => row.maleCount);
    const femaleCounts = results.map((row) => row.femaleCount);

    res.json({ male: maleCounts, female: femaleCounts });
  });
});


//nurse ratings
app.get('/api/nurse-ratings', (req, res) => {
  const query = `
  SELECT nursesdetails.first_name, nursesdetails.area_of_expertise, SUM(nurserating.rating) AS total_rating
  FROM nurserating
  INNER JOIN nursesdetails ON nurserating.nurse_id = nursesdetails.nurse_id
  GROUP BY nurserating.nurse_id, nursesdetails.first_name, nursesdetails.area_of_expertise
`;


  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});


//Appointment's payment
app.get('/api/appointment-payment', (req, res) => {
  const query = 'SELECT * FROM appointmentpayment'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results); 
  });
});

app.delete(`/api/appointment-payment/:appointment_payment_id`, (req, res) => {
  const appointment_payment_id = req.params.appointment_payment_id;
  const query = 'DELETE FROM appointmentpayment WHERE appointment_payment_id = ?';
  connection.query(query, [appointment_payment_id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ message: 'Recode deleted successfully' });
  });
});




//this is real one

app.post("/api/doctorDetails", async (req, res) => {
  const { doctor_id,first_name, last_name, birthday, gender, email, phone_number, address_line1, address_line2, address_line3, specialization, nic_Number, license_number } = req.body;
  try {
    const query = "INSERT INTO doctorsdetails (doctor_id,first_Name, last_Name, birthday, gender, email, phone_Number, address_line1, address_line2, address_line3, specialization, password, nic_number, license_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const params = [doctor_id,first_name, last_name, birthday, gender, email, phone_number, address_line1, address_line2, address_line3, specialization, nic_Number, license_number ];
    await executeQuery(query, params);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({ error: "Failed to add doctor" });
  }
});



// app.post('/api/doctors', (req, res) => {
//   const {
//     doctor_id,
//     first_name,
//     last_name,
//     birthday,
//     gender,
//     email,
//     phone_number,
//     address_line1,
//     address_line2,
//     address_line3,
//     specialty,
//     password,
//     nic_number,
//     doctor_register_number
//   } = req.body;
//   const query =
//     'INSERT INTO doctorsdetails (doctor_id, first_name, last_name, birthday, gender, email, phone_number, address_line1, address_line2, address_line3, specialty, password,nic_number,doctor_register_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,? ,?)';
//   connection.query(
//     query,
//     [
//       doctor_id,
//       first_name,
//       last_name,
//       birthday,
//       gender,
//       email,
//       phone_number,
//       address_line1,
//       address_line2,
//       address_line3,
//       specialty,
//       password,
//       nic_number,
//       doctor_register_number
//     ],
//     (err, results) => {
//       if (err) {
//         console.error('Error executing query:', err);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }
//       res.status(201).json({ message: 'Doctor added successfully' });
//     }
//   );
// });


// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;
//   // Query the doctorsdetails table for the entered email
//   const query = 'SELECT * FROM nursinghomedb.doctorsdetails WHERE email = ?';
//   connection.query(query, [email], (error, results) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     // Check if a record is found
//     if (results.length > 0) {
//       const doctor = results[0];
//       // Compare the entered password with the stored password
//       if (password === doctor.password) {
//         // Passwords match, login successful
//         req.session.userId = doctor.doctor_id; // Set up session or any desired action
//         res.status(200).json({ message: 'Login successful' });
//       } else {
//         // Passwords do not match
//         res.status(401).json({ error: 'Invalid credentials' });
//       }
//     } else {
//       // No record found for the entered email
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   });
// });








