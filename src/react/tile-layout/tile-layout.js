import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { mergeProps } from '../helpers';

export default class TileLayout extends React.Component {
  static propTypes = {
    columns: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    noGutter: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    columns: 3,
    noGutter: false
  };

  componentDidMount() {
    //require('../../css/tile-layout/tile-layout.scss');
  }

  getColumnClasses = columns => {
    if (columns instanceof Object) {
      const classes = [];

      for (let breakpoint in columns) {
        if (columns.hasOwnProperty(breakpoint)) {
          classes.push(`tile-layout-${breakpoint}-${columns[breakpoint]}`);
        }
      }

      return classes;
    } else {
      return `tile-layout-xs-${columns}`;
    }
  };

  render() {
    const { children, columns, noGutter, ...others } = this.props;

    const classes = classnames(
      this.getColumnClasses(this.props.columns),
      this.props.noGutter ? null : 'tile-gutter',
      'tile-layout'
    );
    const props = mergeProps({ className: classes }, others);

    return <div {...props}>{children}</div>;
  }
}

// UXPin Merge doesn't support multiple components in one file. Component moved to ./src/react/tile-layout-item
/*export class TileLayoutItem extends React.Component {
  componentDidMount() {
    //require('../../css/tile-layout/tile-layout.scss');
  }

  render() {
    return <div {...mergeProps({ className: 'tile-item' }, this.props)} />;
  }
}*/
