import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { text, event, className, disabled } = this.props;

        return (
            <button
                onClick={event}
                type='button'
                className={className}
                disabled={disabled}
            >

                {text}
            </button>
        );
    }
}

export default Button;