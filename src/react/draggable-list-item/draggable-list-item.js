import React from 'react';
import classnames from 'classnames';
//import move from './move_helper';
import Iconography from '../iconography/iconography';
import { mergeProps } from '../helpers';
import PropTypes from 'prop-types';

export default class DraggableListItem extends React.Component {
  static propTypes = {
    draggingId: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragEnd: PropTypes.func,
    grabbed: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    this.state = { hover: false };
  }

  componentDidMount() {
    //require('../../css/lists/lists.scss');
  }

  onMouseEnter = () => this.setState({ hover: true });

  onMouseLeave = () => this.setState({ hover: false });

  render() {
    const { hover } = this.state;
    const {
      grabbed,
      onDragStart,
      onDragEnd,
      onDragEnter,
      draggingId,
      children
    } = this.props;
    const { onMouseEnter, onMouseLeave } = this;
    const className = classnames({ pan: true, grabbed, hover });
    const innerClassName = classnames(
      this.props.className,
      'draggable-item-content'
    );
    const props = {
      className,
      onMouseEnter,
      onMouseLeave,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragOver: e => e.preventDefault(),
      draggable: !grabbed,
      'data-dragging-id': draggingId
    };

    return (
      <li {...props} aria-dropeffect="move">
        <div className={innerClassName}>
          <div
            className="draggable-grip mhs"
            aria-grabbed={grabbed}
            role="button"
          >
            <Iconography src="grip" />
            <span className="sr-only">Drag to reorder</span>
          </div>
          <span className="draggable-child">{children}</span>
        </div>
      </li>
    );
  }
}
