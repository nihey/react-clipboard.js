import React from 'react';
import Clipboard from 'clipboard';

var ClipboardButton = React.createClass({
  componentDidMount: function() {
    this.clipboard = new Clipboard(this.refs.button, this.props.options);
  },

  getDefaultProps: function() {
    return {
      options: {},
    };
  },

  render: function() {
    return <button ref="button" className={this.props.className} style={this.props.style}>
      {this.props.children}
    </button>;
  },
});
