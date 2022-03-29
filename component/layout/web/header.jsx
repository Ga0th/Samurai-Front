import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { DropdownBox } from './Dropdown';
import { SearchBox } from './searchBox';
import stylecss from '../../../styles/component/layout/header.module.scss';
import { SelectBox } from '../../formik/ReactSelectBox';
import Link from 'next/link';

const WebHeader = () => {

  const LanguageOptions = [
    {
      value: '0',
      label: 'All Languages',
    },
    {
      value: '1',
      label: 'English',
    },
    {
      value: '2',
      label: 'Japanese',
    }
  ];
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Link href='/' passHref>
            <Navbar.Brand>
              <Image src="/images/Headerlogo/logo.png" width={30} fluid />
            </Navbar.Brand>
          </Link>
          <Navbar.Brand className={stylecss.navbar_brand}>
            <SearchBox
              styles={stylecss.dropDownbox}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div className={stylecss.selectmobile}>
            <SelectBox
              options={LanguageOptions}
              isSearchable={false}
              defaultValue={LanguageOptions[0]}
              handleChange={(e) => e.value}
            />
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link href='/articles/random' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Random
                </Nav.Link>
              </Link>
              <Link href='/tags' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Tags
                </Nav.Link>
              </Link>
              <Link href='/parodies' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Parodies
                </Nav.Link>
              </Link>
              <Link href='/characters' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Characters
                </Nav.Link>
              </Link>
              <Link href='/artists' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Artists
                </Nav.Link>
              </Link>
              <Link href='/groups' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Groups
                </Nav.Link>
              </Link>
              <Link href='/articles/rank' passHref>
                <Nav.Link className={stylecss.navlink}>
                  Rank
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className={stylecss.selectweb}>
            <SelectBox
              options={LanguageOptions}
              isSearchable={false}
              defaultValue={LanguageOptions[0]}
              handleChange={(e) => e.value}
            />
          </div>
        </Container>

      </Navbar>
    </div>
  );
};

export default WebHeader;