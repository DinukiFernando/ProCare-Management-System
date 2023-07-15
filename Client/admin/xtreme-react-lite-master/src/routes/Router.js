import { lazy } from "react";
import { Navigate } from "react-router-dom";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const DFullLayout = lazy(() => import("../layouts/DFullLayout.js"));
const NFullLayout = lazy(() => import("../layouts/NFullLayout.js"));

/***** Pages ****/
const MyProfile = lazy(() => import("../views/ui/myProfile.js"));

const Login = lazy(() => import("../views/ui/Login.js"));
const NLogin = lazy(() => import("../views/ui/NLogin.js"));
const ALogin = lazy(() => import("../views/ui/ALogin.js"));
const SignUp = lazy(() => import("../views/ui/SignUp.js"));
const Starter = lazy(() => import("../views/Starter.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Appointments = lazy(() => import("../views/ui/Appoinments.js"));
const Patients = lazy(() => import("../views/ui/Patients.js"));
const Doctors = lazy(() => import("../views/ui/Doctors.js"));
const Nurses = lazy(() => import("../views/ui/Nurses.js"));
const Staff = lazy(() => import("../views/ui/Staff.js"));
const RoomList = lazy(() => import("../views/ui/Rooms.js"));
const Services = lazy(() => import("../views/ui/Services.js"));
const Payment = lazy(() => import("../views/ui/Payment.js"));
const Guardian = lazy(() => import("../views/ui/Guardian.js"));
const CarePlan = lazy(() => import("../views/ui/CarePlan.js"));
const DailyHealthAnalysis = lazy(() => import("../views/ui/DailyHealthAnalysis.js"));
// const Insuarance = lazy(() => import("../views/ui/Insuarance.js"));
const MedicalInformation = lazy(() => import("../views/ui/MedicalInformation.js"));
const MonthlyPayment = lazy(() => import("../views/ui/MonthlyPayment.js"));
const DoctorForm = lazy(() => import("../views/ui/DoctorForm.js"));
const NurseForm = lazy(() => import("../views/ui/NurseForm.js"));
const AdminForm = lazy(() => import("../views/ui/AdminForm.js"));
const GuardianForm = lazy(() => import("../views/ui/GuardianForm.js"));
// const Website = lazy(() => import("../views/ui/Website.jsX"));

const ProCareWebsite = lazy(() => import("../views/ProCareWebsite.js"));

//doctor
const DStarter = lazy(() => import("../views/DStarter.js"));
const DNAppointments = lazy(() => import("../views/ui/DNAppoinments.js"));
const DNPatients = lazy(() => import("../views/ui/DNPatients.js"));
const DNDoctors = lazy(() => import("../views/ui/DNDoctors.js"));
const DNNurses = lazy(() => import("../views/ui/DNNurses.js"));
const DNCarePlan = lazy(() => import("../views/ui/DNCarePlan.js"));
const DNDailyHealthAnalysis = lazy(() => import("../views/ui/DNDailyHealthAnalysis.js"));
const EmergencyContact = lazy(() => import("../views/ui/EmergencyContact.js"));
const DNMedicalInformation = lazy(() => import("../views/ui/DNMedicalInformation.js"));
const DSchedule = lazy(() => import("../views/ui/DSchedule.js"));
const DAlerts = lazy(() => import("../views/ui/DAlerts"));

//nurse
// const NStarter = lazy(() => import("../views/NStarter.js"));

/*****Routes******/

const ThemeRoutes = [
  {path: "/login", exact: true, element: <Login />},
  {path: "/my-profile", exact: true, element: <MyProfile />},
  {path: "/nurse-login", exact: true, element: <NLogin />},
  {path: "/admin-login", exact: true, element: <ALogin />},
  {path: "/signUp", exact: true, element: <SignUp />},
  { path: "/doctor-form", exact: true, element: <DoctorForm /> },
      { path: "/nurse-form", exact: true, element: <NurseForm /> },
      { path: "/admin-form", exact: true, element: <AdminForm /> },
      { path: "/guardian-form", exact: true, element: <GuardianForm /> },
      // { path: '/website', exact: true, element: <Website /> },
      // { path: '/pro-website', exact: true, element: <ProWebsite /> },
      { path: '/website', exact: true, element: <ProCareWebsite /> },

  {
    path: "/",
    element: <FullLayout />,
    children: [
      // { path: "/login", exact: true, element: <Login /> },
      { path: "/", element: <Navigate to="/website" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/Appointments", exact: true, element: <Appointments /> },
      { path: "/Patients", exact: true, element: <Patients /> },
      { path: "/Doctors", exact: true, element: <Doctors /> },
      { path: "/Nurses", exact: true, element: <Nurses /> },
      { path: "/Staff", exact: true, element: <Staff /> },
      { path: "/Rooms", exact: true, element: <RoomList /> },
      { path: "/Services", exact: true, element: <Services /> },
      { path: "/Payment", exact: true, element: <Payment /> },
      { path: "/Guardian", exact: true, element: <Guardian /> },
      
      { path: "/CarePlan", exact: true, element: <CarePlan /> },
      { path: "/DailyHealthAnalysis", exact: true, element: <DailyHealthAnalysis /> },
      { path: "/EmergencyContact", exact: true, element: <EmergencyContact /> },
      { path: "/MedicalInformation", exact: true, element: <MedicalInformation /> },
      { path: "/MonthlyPayment", exact: true, element: <MonthlyPayment /> },

      

      
    ],
  },
  {//doctor
    path: "/",
    element: <DFullLayout />,
    children: [
      // { path: "/", element: <Navigate to="/dnstarter" /> },
      { path: "/doctor-starter", exact: true, element: <DStarter /> },
      { path: "/doctor-alerts", exact: true, element: <DAlerts /> },
      { path: "/doctor-nurse-Appointments", exact: true, element: <DNAppointments /> },
      { path: "/doctor-nurse-Patients", exact: true, element: <DNPatients /> },
      { path: "/doctor-nurse-Doctors", exact: true, element: <DNDoctors /> },
      { path: "/doctor-nurse-Nurses", exact: true, element: <DNNurses /> },
      { path: "/doctor-nurse-CarePlan", exact: true, element: <DNCarePlan /> },
      { path: "/doctor-nurse-DailyHealthAnalysis", exact: true, element: <DNDailyHealthAnalysis /> },
      // { path: "/doctor-nurse-Insuarance", exact: true, element: <DNInsuarance /> },
      { path: "/doctor-nurse-MedicalInformation", exact: true, element: <DNMedicalInformation /> },
      { path: "/doctor-Schedule", exact: true, element: <DSchedule /> }, 
      
    ],
  },

  {//nurse
    path: "/",
    element: <NFullLayout />,
    children: [
      // { path: "/", element: <Navigate to="/dnstarter" /> },
      { path: "/nurse-starter", exact: true, element: <DStarter /> },
      { path: "/nurse-alerts", exact: true, element: <nAlerts /> },
      { path: "/doctor-nurse-Appointments", exact: true, element: <DNAppointments /> },
      { path: "/doctor-nurse-Patients", exact: true, element: <DNPatients /> },
      { path: "/doctor-nurse-Doctors", exact: true, element: <DNDoctors /> },
      { path: "/doctor-nurse-Nurses", exact: true, element: <DNNurses /> },
      { path: "/doctor-nurse-CarePlan", exact: true, element: <DNCarePlan /> },
      { path: "/doctor-nurse-DailyHealthAnalysis", exact: true, element: <DNDailyHealthAnalysis /> },
      // { path: "/doctor-nurse-Insuarance", exact: true, element: <DNInsuarance /> },
      { path: "/doctor-nurse-MedicalInformation", exact: true, element: <DNMedicalInformation /> },
      { path: "/doctor-Schedule", exact: true, element: <DSchedule /> }, 
      { path: "/nurse-Rooms", exact: true, element: <RoomList /> },
    ],
  }




    ]
export default ThemeRoutes;
