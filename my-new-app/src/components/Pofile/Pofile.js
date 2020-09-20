import React, {Component} from 'react';
import './Pofile.scss';

class Pofile extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = () => {
        this.props.history.push('/');
    }
    onSubmitCards = () => {
        this.props.history.push('/cards');
    }
    render() {
        return (
            <div className="pofile">
                <h1>Welcome to my Shoop). You can see my product and can add </h1>
                <img className='image' src='../img/cat.jpg' alt='cat'/><br/>
                <button onClick={this.onSubmit}>Log Out</button>
                <button onClick={this.onSubmitCards}>Cards</button>
            </div>
        );
    }
}

export default Pofile;