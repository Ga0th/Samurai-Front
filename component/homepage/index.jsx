import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Container, Pagination, Row, Stack } from 'react-bootstrap';
import stylecss from '../../styles/component/homepage/homePage.module.scss';

const HomePage = () => {
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
              <Card.Title className={stylecss.title}>
                <FontAwesomeIcon className={stylecss.icon} icon={faStore} /> New Uploads
              </Card.Title>
              <Row>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup} onClick={() => router.push(`/articles/gallery/grid/${id}`)}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                        Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup} onClick={() => router.push(`/articles/gallery/grid/${id}`)}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                        Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup} onClick={() => router.push(`/articles/gallery/grid/${id}`)}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" width='50px' alt="imgs" />
                    <Card.Body>
                      <Card.Text>
                        Logo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card className={stylecss.cardgroup} onClick={() => router.push(`/articles/gallery/grid/${id}`)}>
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

export default HomePage;