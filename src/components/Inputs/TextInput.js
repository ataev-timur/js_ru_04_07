import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,            
            isValid: true
        };
    }

    static propTypes = {

    }

    render() {
        let className = this.state.isValid ? '' : 'invalid';
        return <input className={className} type="text" value={this.state.text} onChange={this.onChange} />
    }
    
    onChange = (ev) => {
        if (ev.target.value.length > this.props.max) {
            return this;
        }

        this.setState({
            text: ev.target.value,
            isValid: ev.target.value.length >= this.props.min
        })
    }
}

export default TextInput;