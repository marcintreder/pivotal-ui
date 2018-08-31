import React from 'react';
import classnames from 'classnames';
import move from './move_helper';
import Iconography from '../iconography/iconography';
import { mergeProps } from '../helpers';
import PropTypes from 'prop-types';

const childrenIndices = children => children.map((child, i) => i);

export default class DraggableList extends React.Component {
  static propTypes = {
    onDragEnd: PropTypes.func,
    innerClassName: PropTypes.string,
    children: PropTypes.element
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      itemIndices: childrenIndices(props.children),
      draggingId: null
    };
  }

  componentDidMount() {
    //require('../../css/lists/lists.scss');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children) {
      this.setState({
        itemIndices: childrenIndices(nextProps.children),
        draggingId: null
      });
    }
  }

  dragStart = (draggingId, { dataTransfer }) => {
    dataTransfer.effectAllowed = 'move';
    try {
      dataTransfer.dropEffect = 'move';
      dataTransfer.setData('text/plain', '');
    } catch (err) {
      dataTransfer.setData('text', '');
    }
    setTimeout(() => this.setState({ draggingId }), 0);
  };

  dragEnd = () => {
    this.setState({ draggingId: null });
    this.props.onDragEnd && this.props.onDragEnd(this.state.itemIndices);
  };

  dragEnter = e => {
    const { draggingId, itemIndices } = this.state;
    const endDraggingId = Number(
      e.currentTarget.getAttribute('data-dragging-id')
    );
    if (draggingId === null || Number.isNaN(endDraggingId)) return;

    const startIndex = itemIndices.indexOf(draggingId);
    const endIndex = itemIndices.indexOf(endDraggingId);

    move(itemIndices, startIndex, endIndex);
    this.setState({ itemIndices });
  };

  render() {
    const items = [];
    let grabbed;
    const { children, innerClassName, onDragEnd, ...others } = this.props;
    React.Children.forEach(
      children,
      function(child, draggingId) {
        grabbed = this.state.draggingId === draggingId;
        items.push(
          React.cloneElement(child, {
            grabbed,
            onDragStart: this.dragStart.bind(this, draggingId),
            onDragEnd: this.dragEnd,
            onDragEnter: this.dragEnter,
            draggingId,
            key: draggingId,
            className: innerClassName
          })
        );
      },
      this
    );
    const sortedItems = this.state.itemIndices.map(i => items[i]);
    const props = mergeProps(others, {
      className: {
        'list-draggable': true,
        dragging: this.state.draggingId !== null
      }
    });
    return <ul {...props}>{sortedItems}</ul>;
  }
}
