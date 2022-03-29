import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Container, Pagination, Row, Stack } from 'react-bootstrap';
import withWebLayout from '../../../../component/layout/web/withWebLayout';
import stylecss from '../../../../styles/component/articles/gallery.module.scss';

const Gallery = () => {
  const router = useRouter();
  const { id } = router.query;
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
            <Card.Body>
              <Row>
                <Col lg={12}>
                  <Card className={stylecss.cardgroup}>
                    <Card.Img variant="top" src="/images/Headerlogo/logo.png" alt="imgs" />
                  </Card>
                </Col>
              </Row>
            </Card.Body>
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
            <Card.Text className={stylecss.text}>
            Back To Gallery
            </Card.Text>
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
export default withWebLayout(Gallery);