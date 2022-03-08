import React from "react";
import { Dropdown } from "react-bootstrap";

const DropdownComponent = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="dark">Pilih Menu</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/">Bubur</Dropdown.Item>
          <Dropdown.Item href="#/">Kopi</Dropdown.Item>
          <Dropdown.Item href="#/">Mie Ayam</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
