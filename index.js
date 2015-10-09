import React from 'react';
import Clipboard from 'clipboard';

let counter = 0;

export default class ClipboardButton extends React.Component {
  static propTypes: {
    options: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.id = `__react_clipboard_${counter++}__`;
  }

  componentDidMount() {
    this.clipboard = new Clipboard(`#${this.id}`, this.props.options || {});
  }

  render() {
    return (
      <button
        id={this.id}
        className={this.props.className || ''}
        style={this.props.style || {}}
        data-clipboard-text={this.props['data-clipboard-text']}
        data-clipboard-target={this.props['data-clipboard-target']}
      >
        {this.props.children}
      </button>
    );
  }
}
