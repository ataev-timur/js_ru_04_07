import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './Inputs/TextInput';

class CommentForm extends Component {
    static propTypes = {

    }

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <div>
                <p>Add comment</p>
                user: <TextInput ref={this.setContainerRef('userInput')} text={this.state.user} min={10} max={30} />
                <br />
                text: <TextInput ref={this.setContainerRef('textInput')} text={this.state.text} min={30} max={150} />
                <br />
                <button onClick={this.handleSubmit}>Add Comment</button>
            </div>
        )
    }

    setContainerRef = inputType => container => this[inputType] = container;

    handleSubmit = (ev) => {
        this.setState({
            user: this.userInput.state.text,
            text: this.textInput.state.text
        });

        if (this.userInput.state.isValid && this.textInput.state.isValid) {
            alert('Ales Gut');
        } else {
            alert('Ales Nicht Arbaiten');
        }
    }
}

export default CommentForm;