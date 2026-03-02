import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styles for the card
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover'
  };

  return (
    <Card 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
        e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = cardStyle.boxShadow;
      }}
    >
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props for the Player component
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x200?text=No+Image"
};

export default Player;
