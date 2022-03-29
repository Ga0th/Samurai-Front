import React from 'react';
import { Card, Col, Container, InputGroup, ListGroup, Nav, Pagination, Row, Stack, Tab } from 'react-bootstrap';
import stylecss from '../../styles/component/tags/tag.module.scss';
import Alphabet from '../../public/json/Alphabet.json';
import withWebLayout from '../../component/layout/web/withWebLayout';

const Tags = () => {
  const [alphabet, setalphabet] = React.useState('a');
  const [Tabmenus, setTabMenus] = React.useState('1');
  const handleSelect = (eventKey) => {
    setalphabet(eventKey);
  };

  const handleTab = (eventKey) => {
    setTabMenus(eventKey);
  };

  const TabMenu = [
    {
      id: '1',
      name: 'A-Z'
    },
    {
      id: '2',
      name: 'Popular'
    },
  ];

  return (
    <Card className={stylecss.section}>
      <Container className={stylecss.container}>
        <Stack gap={3}>
          <Card>
            <Card.Body>
                            Call Now
            </Card.Body>
          </Card>
          <Card className={stylecss.cardtab}>
            <Card.Body>
              <Tab.Container onSelect={handleTab} className={stylecss.tab} id="noanim-tab-example" defaultActiveKey={Tabmenus}>
                <Row>
                  <Col md={12}>
                    <Nav variant="pills" className={stylecss.nav_link_active}>
                      {TabMenu && TabMenu.map((tabs, index) => {
                        return (
                          <Nav.Item className={stylecss.nav_link_active} key={`navTab${index}`}>
                            <Nav.Link className={stylecss.navlinkpills} eventKey={tabs.id}>
                              {tabs.name}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Col>
                  <Col>
                    <Tab.Content>
                      {TabMenu && TabMenu.map((Tabs, index) => {
                        return (
                          <Tab.Pane key={`Tab${index}`} eventKey={Tabs.id}>
                            <Tab.Container onSelect={handleSelect} className={stylecss.tab} id="noanim-tab-example" defaultActiveKey={alphabet}>
                              <Row>
                                <Col md={12}>
                                  <Nav variant="tabs" className={stylecss.nav_link_active}>
                                    {Alphabet && Alphabet.map((alphabet, index) => {
                                      return (
                                        <Nav.Item className={stylecss.nav_link_active} key={`navTab${index}`}>
                                          <Nav.Link className={stylecss.navlink} eventKey={alphabet.id}>{alphabet.name}</Nav.Link>
                                        </Nav.Item>
                                      );
                                    })}
                                  </Nav>
                                </Col>
                                <Col>
                                  <Card className={stylecss.card}>
                                    <Tab.Content>
                                      {Alphabet && Alphabet.map((alphabet, index) => {
                                        return (
                                          <Tab.Pane key={`Tab${index}`}  eventKey={alphabet.id}>
                                            <ListGroup className={stylecss.listGroup}>
                                              <Row>
                                                <Col>
                                                  <Card.Body>
                                                    <InputGroup className="mb-3">
                                                      <ListGroup.Item>
                                                        <Card.Text>Logo</Card.Text>
                                                      </ListGroup.Item>
                                                      <InputGroup.Text id="basic-addon1">1222</InputGroup.Text>
                                                    </InputGroup>
                                                  </Card.Body>
                                                </Col>
                                              </Row>
                                            </ListGroup>
                                          </Tab.Pane>
                                        );
                                      })}
                                    </Tab.Content>
                                  </Card>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </Tab.Pane>
                        );
                      })}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
          <Pagination className={stylecss.pagination}>
            <Pagination.Item>
              {1}
            </Pagination.Item>
            <Pagination.Item>
              {2}
            </Pagination.Item>
            <Pagination.Item>
              {3}
            </Pagination.Item>
          </Pagination>
          <Card>
            <Card.Body>
                            Call Now
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </Card>
  );
};

export default withWebLayout(Tags);