
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/common/table/tableRow.css';

class TableRow extends Component {

  render() {
    const children = React.Children.map(this.props.children, (item, index) =>
      React.cloneElement(item, {
        columnNo: index,
      }));

    const tr = React.createElement('tr', {
      className: css.row,
      style: this.props.style,
      onClick: (e) => { this.props.onRowClick(e, this.props.rowNumber); },
    }, children);

    return tr;
  }
}

TableRow.uiName = 'TableRow';
TableRow.defaultProps = {
};

TableRow.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
  selected: PropTypes.bool,
  rowNumber: PropTypes.number,
  onRowClick: PropTypes.func,
};

export default TableRow;
