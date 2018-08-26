import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ListItem from '../list-item/list-item.js';

export default class List extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf([
      'list-unstyled-ordered',
      'list-unstyled-unordered',
      'list-inline',
      'list-breadcrumb'
    ]),
    className: PropTypes.string,
    unstyled: PropTypes.bool,
    divider: PropTypes.bool
  };

  componentDidMount() {
    require('../../css/lists');
  }

  render() {
    let { className, children, unstyled, divider, ...others } = this.props;

    if (this.props.kind === 'list-breadcrumb') {
      return <ul className="list-breadcrumb">{children}</ul>;
    } else if (this.props.kind === 'list-inline') {
      children = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'list-inline-divider' })
      );
      return <ul className="list-inline">{children}</ul>;
    } else if (this.props.kind === 'list-unstyled-ordered') {
      children = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'list-divider' })
      );
      return <ol className="list-unstyled">{children}</ol>;
    } else if (this.props.kind === 'list-unstyled-unordered') {
      children = React.Children.map(children, child =>
        React.cloneElement(child, { className: 'list-divider' })
      );
      return <ul className="list-unstyled">{children}</ul>;
    }
  }
}
