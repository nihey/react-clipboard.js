import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

const ClipboardButton = (props) => {
  const {component, title, style, isVisibleWhenUnsupported, className, onClick, type} = props;
  const ref = React.useRef();

  function propsWith(regexp, remove=false) {
    const object = {};

    Object.keys(props).forEach((key) => {
      if (key.search(regexp) !== -1) {
        const objectKey = remove ? key.replace(regexp, '') : key;
        object[objectKey] = props[key];
      }
    });

    return object;
  }

  React.useEffect(() => {
    // Support old API by trying to assign props.options first;
    const options = props.options || propsWith(/^option-/, true);
    const element = ReactDOM.findDOMNode(ref.current);
    if (!element) {
      return;
    }
  
    const clipboard = new Clipboard(element, options);
  
    const callbacks = propsWith(/^on/, true);
    Object.keys(callbacks).forEach((callback) => {
      clipboard.on(callback.toLowerCase(), props['on' + callback]);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  function getType() {
    const componentType = getComponent();
    if (componentType === 'button' || componentType === 'input') {
      return type || 'button';
    }
    else {
      return undefined;
    }
  }

  function getComponent() {
    return component || 'button';
  }

  const attributes = {
    title: title || '',
    type: getType(),
    className: className || '',
    style: style || {},
    ref,
    onClick: onClick,
    ...propsWith(/^data-/),
    ...propsWith(/^button-/, true),
  };
  
  if (!isVisibleWhenUnsupported && !Clipboard.isSupported()) {
    return null;
  }

  return React.createElement(
    getComponent(),
    attributes,
    props.children
  );
};

ClipboardButton.propTypes = {
  options: function(props, propName, componentName) {
    const options = props[propName];
    if (options && typeof options !== 'object' || Array.isArray(options)) {
      return new Error(`Invalid props '${propName}' supplied to '${componentName}'. ` +
      `'${propName}' is not an object.`);
    }

    if (props['option-text'] !== undefined) {
      const optionText = props['option-text'];
      if (typeof optionText !== 'function') {
        return new Error(`Invalid props 'option-text' supplied to '${componentName}'. ` +
        `'option-text' is not a function.`);
      }
    }
  },
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  component: PropTypes.any,
  children: PropTypes.any,
};

ClipboardButton.defaultProps = {
  isVisibleWhenUnsupported: true,
  onClick: function() {},
};

export default ClipboardButton;