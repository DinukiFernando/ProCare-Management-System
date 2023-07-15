import React from "react";
import { Button, Nav, NavItem, NavLink, } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navigation = [
  {
    title: "Dashboard",
    href: "/doctor-starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alert",
    href: "/nurse-alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Appointments",
    href: "/doctor-nurse-Appointments",
    icon: "bi bi-patch-check",
  },
  // {
  //   title: "Schedule",
  //   href: "/Schedule",
  //   icon: "bi bi-patch-check",
  // },
  {
    title: "Guardian",
    href: "/Guardian",
    icon: "bi bi-person",
  },
  {
    title: "Patients",
    href: "/doctor-nurse-Patients",
    icon: "bi bi-person",
    subItems: [
      {
        title: "Personal details",
        href: "/doctor-nurse-Patients",
      },
      {
        title: "Medical Information",
        href: "/doctor-nurse-MedicalInformation",
      },
      {
        title: "Insuarance Information",
        href: "/doctor-nurse-Insuarance",
      },
      {
        title: "Care Plan",
        href: "/doctor-nurse-CarePlan",
      },
      {
        title: "Daily Health Analysis",
        href: "/doctor-nurse-DailyHealthAnalysis",
      },
    ],
  },
  {
    title: "Doctors",
    href: "/doctor-nurse-Doctors",
    icon: "bi bi-person",
    subItems: [
      {
        title: "Personal Details",
        href: "/doctor-nurse-Doctors",
      },
      {
        title: "Schedule",
        href: "/doctor-Schedule",
      },
    ],
  },
  {
    title: "Room",
    href: "/nurse-Rooms",
    icon: "bi bi-hospital",
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
                {navi.subItems && (
                  <ul className="subItems">
                    {navi.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink tag={Link} to={subItem.href}>
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
    );
    
};

export default Sidebar;
