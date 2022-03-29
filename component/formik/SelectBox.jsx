import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const SelectBox = (props) => {
  const { options,label } = props;
  return (
    <FloatingLabel controlId="floatingSelect" label={label}>
      <Form.Select onChange={(e) => props.onChange(e.target.value)} aria-label="Floating label select example">
        {options && options.map((value, index) => {
          return (
            <div key={`options${index}`}>
              <option value={value.id}>{value.name}</option>
            </div>
          );
        })}
      </Form.Select>
    </FloatingLabel>
  );
};

export default SelectBox;