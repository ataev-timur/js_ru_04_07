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
                user: <TextInput text={this.state.user} min={10} max={30} onChange={(value) => this.setState({user: value})}/>
                <br />
                text: <TextInput text={this.state.text} min={30} max={150} onChange={(value) => this.setState({text: value})}/>
                <br />
                <button onClick={this.handleSubmit}>Add Comment</button>
            </div>
        )
    }

    handleSubmit = (ev) => {
        console.log(this.state);
    }
}

export default CommentForm;