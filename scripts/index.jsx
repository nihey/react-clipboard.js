import React from 'react';
import Clipboard from 'clipboard';

var ClipboardButton = React.createClass({
  componentDidMount: function() {
    this.clipboard = new Clipboard(`#${this.state.id}`,
                                   this.props.options);
  },

  getInitialState: function() {
    return {
      id: Math.random().toString(36).split('.')[1],
    };
  },

  getDefaultProps: function() {
    return {
      options: {},
    };
  },

  render: function() {
    return <button id={this.state.id} className={this.props.className} style={this.props.style}
                   data-clipboard-text={this.props['data-clipboard-text']}
                   data-clipboard-target={this.props['data-clipboard-target']}>
      {this.props.children}
    </button>;
  },
});

module.exports = ClipboardButton;
