import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import styles from '../../../styles/component/dropdown/Dropdown.module.scss';

export const DropdownBox = (props) => {
  const { options } = props;
  const [dropDown, setDropDownValue] = React.useState('All Languages');

  const onChangeValue = (eventKey) => {
    console.log('eventKey', eventKey);
    setDropDownValue(eventKey);
  };
  return (
    <Nav onSelect={(eventKey) => onChangeValue(eventKey)}>
      <NavDropdown align="end" className={styles.dropdowntoggle} title={dropDown} id="currency-nav-dropdown">
        {options && options.map((value, index) => (
          <NavDropdown.Item
            eventKey={value.name}
            key={`options-${index}`}
            className={styles.dropdownitem}>
            {value.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
  );
};