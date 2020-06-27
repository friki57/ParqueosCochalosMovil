import React, { Component } from 'react';
import { Container, Header, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row size = {1}>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
              <Text>
                Hola
              </Text>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F'}}></Col>
          </Row>
          <Row size = {2}>
            <Col style={{ backgroundColor: '#00CE9F'}}></Col>
            <Col style={{ backgroundColor: '#635DB7'}}></Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
