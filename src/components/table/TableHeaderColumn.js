
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './css/tableHeaderColumn.css';

class TableHeaderColumn extends Component {

  render() {
    let className;

    if (this.props.sortable) {
      className = css.sort;
    }
    return (
      <th
        className={className}
        style={this.props.style}
        onClick={() => this.props.onClick(this.props.columnNo)}
      >
        {this.props.children}
      </th>
    );
  }
}

TableHeaderColumn.defaultProps = {
  onClick: () => {},
};

TableHeaderColumn.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
  sortable: PropTypes.bool,
  onClick: PropTypes.func,
  columnNo: PropTypes.number,
};

export default TableHeaderColumn;
