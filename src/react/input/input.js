import React from 'react';
import Iconography from '../iconography/iconography.js';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  static propTypes = {
    size: PropTypes.string,
    icon: PropTypes.string
  };
  componentDidMount() {
    //require('../../css/inputs/input.scss');
  }

  render() {
    const { size, icon, ...props } = this.props;

    const input = (
      <input
        {...{
          ...props,
          className: classnames(props.className, {
            'input-sm': ['sm', 'small'].indexOf(size) !== -1,
            'input-lg': ['lg', 'large'].indexOf(size) !== -1
          })
        }}
      />
    );

    if (!icon) return input;

    return (
      <div className="input-icon-container">
        {input}
        <Iconography {...{ src: icon }} />
      </div>
    );
  }
}
