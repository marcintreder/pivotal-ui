import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/pagination.js';

export default class PaginationUxpin extends React.Component {
  static propTypes = {
    items: PropTypes.number,
    next: PropTypes.bool,
    prev: PropTypes.bool,
    activePage: PropTypes.number,
    linkedPages: PropTypes.object
  };

  static defaultProps = {
    items: 1,
    next: true,
    prev: true,
    activePage: 1
  };

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = { activePage: this.props.activePage };
  }

  handleSelect(event, selectedEvent) {
    const newActivePage = selectedEvent.newActivePage;
    this.setState({ activePage: newActivePage });
    if (this.props.linkedPages && this.props.linkedPages[newActivePage]) {
      window.open(this.props.linkedPages[newActivePage]);
    }
  }

  render() {
    return (
      <Pagination
        items={this.props.items}
        activePage={this.state.activePage}
        onSelect={this.handleSelect}
        next={this.props.next}
        prev={this.props.prev}
      />
    );
  }
}
