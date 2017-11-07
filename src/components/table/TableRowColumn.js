
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './css/header.css';

class TableRowColumn extends Component {

  render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
}

TableRowColumn.defaultProps = {
};

TableRowColumn.propTypes = {
  children: PropTypes.node,
  columnNo: PropTypes.number,
};

export default TableRowColumn;
