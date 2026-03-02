import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  // Container style for the players list
  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>FIFA Player Cards</h1>
      <Container>
        <Row>
          {players.map((player, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              {/* Using spread operator to pass all props */}
              <Player {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayersList;
