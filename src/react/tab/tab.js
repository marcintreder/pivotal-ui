import React from 'react';

import PropTypes from 'prop-types';

export default class Tab extends React.PureComponent {
  static propTypes = {
    'aria-labelledby': PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    eventKey: PropTypes.number,
    onEntered: PropTypes.func,
    onExited: PropTypes.func,
    tabClassName: PropTypes.string,
    title: PropTypes.node,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  };

  static defaultProps = {
    onEntered() {},
    onExited() {}
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
