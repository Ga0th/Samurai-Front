import { Form } from 'react-bootstrap';
import Select from 'react-select';
import React from 'react';

export const SelectBox = (props) => {
  const { handleChange, placeholder, defaultValue, value, error, isSearchable, required, options, label, isClearable, isLoading, className, onInputChange } = props;
  const selected = options.find((e) => e.value === value);
  return (
    <div
      className={className}
    >
      <Select
        options={options}
        required={required}
        isClearable={isClearable}
        onInputChange={onInputChange}
        isLoading={isLoading}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        value={selected}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        isInvalid={error}
      />
    </div>
  );
};
