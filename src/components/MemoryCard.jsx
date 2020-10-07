import React, { Component } from 'react';
import './MemoryCard.css';
import Card from './images/Card.png';

class MemoryCard extends Component {
    render() {
        let memoryCardInnerClass = "MemoryCardInner";
            if (this.props.isFlipped)
            memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src={Card} className="Card-Logo" alt="Question mark" />
                    </div>
                    <div className="MemoryCardFront">
                        <p>{this.props.symbol}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;