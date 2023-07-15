import React from "react";

import {
  Navbar,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const [isOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Navbar color="primary" dark expand="md">
      <Collapse navbar isOpen={isOpen}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary" className="d-flex align-items-center ml-auto"> 
            <img 
              src={user1}
              alt="profile"
              className="rounded-circle ml-auto "
              width="30"    
            ></img>

          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
