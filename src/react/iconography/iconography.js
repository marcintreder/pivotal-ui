import { mergeProps } from '../helpers';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Icons from './icons';

export default class Iconography extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
    verticalAlign: PropTypes.oneOf(['middle', 'baseline']),
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired
  };

  static defaultProps = {
    size: 16,
    fill: '#243641',
    verticalAlign: 'middle'
  };

  componentDidMount() {
    //require('../../css/iconography/iconography.scss');
  }

  render() {
    if (this.props.style) {
      this.props.style = Object.assign(this.props.style, {
        fontSize: `${this.props.size}px`,
        fill: this.props.fill
      });
    } else {
      this.props.style = {
        fontSize: `${this.props.size}px`,
        fill: this.props.fill
      };
    }

    const { src, verticalAlign, ...others } = this.props;

    const props = mergeProps(others, {
      className: classnames('icon', `icon-${verticalAlign}`, {
        spinner: src.indexOf('spinner') === 0
      })
    });

    let renderedIcon = Icons[src],
      iconSrc = src;

    if (!renderedIcon) {
      renderedIcon = Icons.help;
      iconSrc = 'help';
      console.warn(`Icon "${src}" is not recognized.`);
    }

    return (
      <div {...props}>
        {React.cloneElement(renderedIcon, {
          className: `icon-${iconSrc}`,
          key: iconSrc
        })}
      </div>
    );
  }
}
