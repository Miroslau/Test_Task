import React, { Component } from 'react';
import Card from './Card'
import CardCreationForm from './CardCreationForm';
import { connect } from 'react-redux';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => {
    this.props.history.push('/pofile');
  }

  render() {
      const filterCards = this.props.cards.filter(card => card.title.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1);
      return (
        <div>
          <section className="section products-filter">
            <div className="products-filter__buttons">
              You searched for: Batman, {this.props.cards.length} results found
            </div>
            <button onClick={this.onSubmit}>My Profile</button>
          </section>
          <div className="products">
          {filterCards.map(card => {
            return <Card card={card} key={card.id}/>
          })}
          </div>
          <CardCreationForm onCreateCard={ this.handleCardCreation }/>
        </div>
      );
    }
  };

  const mapStateToProps = (state) => {
    const { cardsReducer } = state;
    return {
      searchValue: cardsReducer.searchValue,
      cards: cardsReducer.cards,
    }
  }

  export default connect(mapStateToProps)(CardsContainer);




