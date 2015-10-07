# React-Clipboard

React wrapper for [clipboard.js](http://zenorocha.github.io/clipboard.js/)

[![Dependency
Status](https://david-dm.org/nihey/react-clipboard.png)](https://david-dm.org/nihey/react-clipboard)

# Installation
```
$ npm i --save react-clipboard.js
```

# Usage
```
var React = require('react');
var ClipboardButton = require('react-clipboard.js')

var MyView = React.createClass({
  render: function() {
    return <div>
      <ClipboardButton data-clipboard-text="I'll be coppied">
        copy to clipboard
      </ClipboardButton>
    </div>;
  },
});

React.render(<MyView/>, document.getElementById('react-body'));
```

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)
