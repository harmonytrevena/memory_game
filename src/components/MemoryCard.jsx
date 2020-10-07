import React, { Component } from 'react';
import './MemoryCard.css';
import Card from './images/Card.png';

class MemoryCard extends Component {
    constructor() {
        super();
        this.state = { isFlipped: false };
    }
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }
    render() {
        let memoryCardInnerClass = "MemoryCardInner";
            if (this.state.isFlipped)
            memoryCardInnerClass = this.state.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src={Card} className="Card-Logo" alt="Question mark" />
                    </div>
                    <div className="MemoryCardFront">
                        <p>∆</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;