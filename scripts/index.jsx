import React from 'react';
import Clipboard from 'clipboard';

var counter = 0;
var ClipboardButton = React.createClass({
  componentDidMount: function() {
    this.clipboard = new Clipboard(`#${this.state.id}`,
                                   this.props.options);
  },

  getInitialState: function() {
    return {
      id: `__react_clipboard_${counter++}__`,
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
