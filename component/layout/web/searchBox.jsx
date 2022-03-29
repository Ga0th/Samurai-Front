import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

export const SearchBox = (props) => {
  const { styles } = props;
  const router = useRouter();
  const [value, setValue] = React.useState('');

  const onSearch = () => {
    router.push(`/products?search=${value}`);
  };

  return (
    <span className="searchBox">
      <Form className="d-flex">
        <InputGroup size="md" className="mt-2">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputGroup.Text className={styles}>
            <FontAwesomeIcon icon={faSearch} onClick={onSearch} />
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </span>
  );
};