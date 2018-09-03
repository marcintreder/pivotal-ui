import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ListItem from '../list-item/list-item.js';

export default class List extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(['ordered', 'unordered', 'inline', 'breadcrumb']),
    className: PropTypes.string,
    unstyled: PropTypes.bool,
    divider: PropTypes.bool,
    children: PropTypes.node
  };

  componentDidMount() {
    //require('../../css/lists/lists.scss');
  }

  render() {
    let { className, children, unstyled, divider, ...others } = this.props;

    if (this.props.kind === 'breadcrumb') {
      return (
        <ul className="list-breadcrumb">{children.map(child => child)}</ul>
      );
    } else if (this.props.kind === 'inline') {
      return (
        <ul className={`list-inline ${divider ? 'list-inline-divider' : ''}`}>
          {children.map(child => child)}
        </ul>
      );
    } else if (this.props.kind === 'ordered') {
      return (
        <ol
          className={`${divider ? 'list-divider' : ''} ${
            unstyled ? 'list-unstyled' : ''
          }`}
        >
          {children.map(child => child)}
        </ol>
      );
    } else if (this.props.kind === 'unordered') {
      children = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'list-divider' })
      );
      return (
        <ul
          className={`${divider ? 'list-divider' : ''} ${
            unstyled ? 'list-unstyled' : ''
          }`}
        >
          {children.map(child => child)}
        </ul>
      );
    }
  }
}
