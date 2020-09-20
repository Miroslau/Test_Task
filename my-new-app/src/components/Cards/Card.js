import React from 'react';
import './Card.scss';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import deleteCardAction from '../../actions/deleteCardAction';


const Card = (props) => (
  <figure className="product">
    <div className="product__cross" onClick={ () => {props.deleteCardAction(props.card.id)} }><i className="fa fa-times fa-3x"></i></div>
    <img className="product__image" src={props.card.imageUrl} alt="Image should be here" />
    <figcaption className="product__description description">
      <p className="description__headline">Name: {props.card.title}</p>
      <p className="description__headline">Year: {props.card.year}</p>
      <p className="description__headline">imdbID: {props.card.imdbID}</p>
      <p className="description__headline">Type: {props.card.type}</p>
    </figcaption>
  </figure>
  );

export default connect(null, {deleteCardAction})(Card);