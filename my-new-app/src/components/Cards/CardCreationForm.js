import React, { Component } from 'react';
import './CardCreationForm.scss';
import { connect } from 'react-redux';
import addCardAction from '../../actions/addCardAction';

class CardCreationForm extends Component {
    constructor(props) {
        super(props);
        this.handleCardCreation = this.handleCardCreation.bind(this);
    }

    handleCardCreation(e) {
        e.preventDefault();
        let lastId = this.props.cards.length > 0 ? this.props.cards[this.props.cards.length - 1].id : 0;
        const newCard = {
            id: lastId += 1,
            year: this.yearInput.value,
            title: this.titleInput.value,
            imageUrl: this.imageInput.value,
            type: 'movie',
            imdbID: '2387hg8'
        }
        this.props.addCardAction(newCard);
    }

    render() {
        return (
            <form onSubmit={this.handleCardCreation}>
                <div className="form">
                    <input type="text" placeholder="Batman" name="field" ref={(input) => {this.titleInput = input}}/>
                    <input type="text" placeholder="1996" name="field" ref={(input) => {this.yearInput = input}}/>
                    <input type="text" placeholder="../img/batman.jpg" name="field" ref={(input) => {this.imageInput = input}}/>
                    <input type="submit" value={'Add new card '}/>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    const { cardsReducer } = state;
    return {
      cards: cardsReducer.cards,
    }
  };

export default connect(mapStateToProps,{addCardAction})(CardCreationForm);