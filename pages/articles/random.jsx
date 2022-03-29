import { useRouter } from 'next/router';
import React from 'react';
import { Badge, Card, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import { CustomButton } from '../../component/button/button';
import withWebLayout from '../../component/layout/web/withWebLayout';
import stylecss from '../../styles/component/articles/random.module.scss';

const Random = () => {
  const router = useRouter();
  const id = 1;
  return (
    <Card className={stylecss.section}>
      <Container className={stylecss.container}>
        <Stack gap={3}>
          <Card>
            <Card.Body>
                            Call Now
            </Card.Body>
          </Card>
          <Card className={stylecss.card}>
            <Card.Body>
              <Container>
                <Row>
                  <Col lg={4}>
                    <Card className={stylecss.cardgroup}>
                      <Card.Img variant="top" src="/images/Headerlogo/logo.png" alt="imgs" />
                    </Card>
                  </Col>
                  <Col lg={8}>
                    <Card className={stylecss.card}>
                      <ListGroup className={stylecss.listgroup}>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Artists: N/A
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Groups: N/A
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Parodies: <Badge bg="secondary">original 370,021</Badge> <Badge bg="secondary">original 370,021</Badge> <Badge bg="secondary">original 370,021</Badge> <Badge bg="secondary">original 370,021</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Characters
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Tags
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Language
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Category
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Pages
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                                                    Uploaded
                        </ListGroup.Item>
                        <ListGroup.Item className={stylecss.listgroup_item}>
                          <Stack direction="horizontal" gap={3}>
                            <CustomButton
                              onClick={() => router.push(`/articles/gallery/grid/${id}`)}
                              title="Page Read"
                              className={stylecss.btn}
                              variant={'secondary'}
                            />
                            <CustomButton
                              title="List Read"
                              onClick={() => router.push(`/articles/gallery/list/${id}`)}
                              className={stylecss.btn}
                              variant={'secondary'}
                            />
                          </Stack>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>


          <Card className={stylecss.card}>
            <Card.Body>
              <Row>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" alt="imgs" />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                  </Card>
                </Col>
              </Row>
                            hi
            </Card.Body>
          </Card>
          <Card className={stylecss.card}>
            <Card.Body>
              <Card.Title className={stylecss.title}>
                                More Like This
              </Card.Title>
              <Row>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                                                Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                                                Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                                                Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                                                Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
                            hi
            </Card.Body>
          </Card>
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

export default withWebLayout(Random);