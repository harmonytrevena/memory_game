import React, { Component } from 'react';
import './MemoryCard.css';
import Card from './images/Card.png';

class MemoryCard extends Component {
    render() {
      return (
        <div className="MemoryCard">
            <img src={Card} className="Card-Logo" alt="Question mark" />
        </div>
      );
    }
}

export default MemoryCard;