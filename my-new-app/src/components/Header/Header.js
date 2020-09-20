import React, { Component } from 'react';
import './Style.scss';
import searchCardAction from '../../actions/searchCardAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.props.searchCardAction(e.target.value);
  }

  render() {
    return(
      <header className="header">
        <div>
          <span className="logo">
            Movie Catalog
          </span>
          <input type="text"
            placeholder="Batman"
            onChange={this.updateSearch}
          />
          <button className="button header-buttons__button"><Link to='/login'>Sign in</Link></button>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const { cardsReducer } = state;
  return {
    searchValue: cardsReducer.searchValue,
    cards: cardsReducer.cards,
  }
}

export default connect(mapStateToProps, {searchCardAction})(Header);