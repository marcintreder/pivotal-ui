import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class ListItem extends React.PureComponent {
  render() {
    return <li {...this.props} />;
  }
}
