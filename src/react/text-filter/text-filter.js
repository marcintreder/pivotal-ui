// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import FlexCol from '../flex-col/flex-col.js';
import Grid from '../grid/grid.js';
import Iconography from '../iconography/iconography.js';

export default class TextFilter extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    emptyState: PropTypes.node,
    filter: PropTypes.func.isRequired,
    filterPlaceholderText: PropTypes.string,
    renderFilteredData: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: [],
    filter: data => data,
    renderFilteredData: () => null,
    filterPlaceholderText: 'Filter...'
  };

  constructor(props) {
    super(props);

    this.state = { filterText: '' };
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
  }

  componentDidMount() {
    //require('../../css/text-filter/text_filter.scss');
  }

  onFilterTextChange({ target: { value } }) {
    this.setState({ filterText: value });
  }

  render() {
    const {
      data,
      filter,
      renderFilteredData,
      className,
      filterPlaceholderText,
      emptyState
    } = this.props;
    const { filterText } = this.state;
    const filteredData = filter(data, filterText);

    let renderBlock = renderFilteredData(filteredData);
    if (filteredData.length === 0 && !!emptyState) {
      renderBlock = emptyState;
    }

    return (
      <div className="text-filter">
        <Grid {...{ className }}>
          <FlexCol className="pan" fixed contentAlignment="middle">
            <Iconography src="filter_list" />
          </FlexCol>
          <FlexCol className="pan">
            <input
              placeholder={filterPlaceholderText}
              type="text"
              value={filterText}
              onChange={this.onFilterTextChange}
            />
          </FlexCol>
          <FlexCol className="pan text-filter-counts" fixed alignment="middle">
            <span className="filtered-count">{filteredData.length}</span> /{' '}
            <span className="unfiltered-count">{data.length}</span>
          </FlexCol>
        </Grid>
        {renderBlock}
      </div>
    );
  }
}
