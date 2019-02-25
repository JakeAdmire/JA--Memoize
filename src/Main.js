import React, { Component } from 'react';
import Card from './Card.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { cardNumber: 0 };
  }
  showNextCard = () => {
    if ((this.state.cardNumber + 1) < this.props.cards.length) {
      this.setState({cardNumber: this.state.cardNumber += 1});
    }
  }
  showPrevCard = () => {
    if (this.state.cardNumber !== 0) {
      this.setState({cardNumber: this.state.cardNumber -= 1});
    }
  }
  generateCards = () => {
    const cards = this.props.cards;
    const cardsList = cards.map((card) => {
      return (
        <Card 
          frontContent={card}
          backContent={card.solutionPrototype}
          cardNumber={this.state.cardNumber}
          nextCard={this.showNextCard}
          prevCard={this.showPrevCard}
        />
      );
    })
   return(cardsList[this.state.cardNumber]); 
  }
  render() {
    return (
      <div className="main">
        {this.generateCards()}
      </div>
    )
  }
}