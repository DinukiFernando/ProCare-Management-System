import React from "react";
import { Button, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alert",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Appointments",
    href: "/Appointments",
    icon: "bi bi-patch-check",
  },
  {
    title: "Patients",
    href: "/Patients",
    icon: "bi bi-person",
    dropdown: [
      {
        title: "Personal details",
        href: "/Patients",
      },
      {
        title: "Medical Information",
        href: "/MedicalInformation",
      },
      {
        title: "Emergency Contact",
        href: "/EmergencyContact",
      },
      {
        title: "Care Plan",
        href: "/CarePlan",
      },
      {
        title: "Daily Health Analysis",
        href: "/DailyHealthAnalysis",
      },
    ],
  },
  {
    title: "Guardian",
    href: "/Guardian",
    icon: "bi bi-person",
  },
  {
    title: "Doctors",
    href: "/Doctors",
    icon: "bi bi-person",

    dropdown: [
      {
        title: "Personal Details ",
        href: "/Doctors",
      },
      {
        title: "Schedule ",
        href: "/Schedule",
      },
    ]
      
  },
  {
    title: "Nurses",
    href: "/Nurses",
    icon: "bi bi-person",

    dropdown: [
      {
        title: "Personal Details ",
        href: "/Nurses",
      },
      {
        title: "Schedule ",
        href: "/ScheduleNurse",
      },
    ]
  },
  {
    title: "Other staff",
    href: "/Staff",
    icon: "bi bi-person",
  },
  {
    title: "Room",
    href: "/Rooms",
    icon: "bi bi-hospital",
  },
  // {
  //   title: "Services",
  //   href: "/Services",
  //   icon: "bi bi-file-medical",
  // },
  {
    title: "Payment",
    href: "/Payment",
    icon: "bi bi-wallet",
    dropdown: [
      {
        title: "Appointment Payments ",
        href: "/Payment",
      },
      {
        title: "Monthly Payment ",
        href: "/MonthlyPayment",
      },
    ]
  },
];

const Sidebar = () => {
  const location = useLocation();

  const showMobileMenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button close size="sm" className="ms-auto d-lg-none" onClick={showMobileMenu} />
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              {navi.dropdown ? (
                <UncontrolledDropdown>
                  <DropdownToggle nav>
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    {navi.dropdown.map((item, idx) => (
                      <DropdownItem key={idx}>
                        <NavLink tag={Link} to={item.href}>
                          {item.title}
                        </NavLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavLink
                  tag={Link}
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </NavLink>
              )}
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
