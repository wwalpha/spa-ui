
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './css/header.css';

class TableBody extends Component {

  constructor() {
    super();
    this.handleOnRowClick = this.handleOnRowClick.bind(this);
    this.state = { selectedRows: [] };
  }

  /** Row Click */
  handleOnRowClick(e, rowIndex) {
    if (!this.props.selectable) {
      return;
    }

    const { selectedRows } = this.state;
    const index = selectedRows.indexOf(rowIndex);
    let newSelectedRows;
    // すでに選択された場合
    if (index !== -1) {
      newSelectedRows = { selectedRows: [...selectedRows.splice(index, 1)] };
    } else {
      newSelectedRows = { selectedRows: [...selectedRows, rowIndex] };
    }

    console.log(newSelectedRows);
    this.setState(newSelectedRows);
  }

  render() {
    const rows = React.Children.map(this.props.children, (rowItem, index) => {
      if (rowItem.type.uiName === 'TableRow') {
        return React.cloneElement(rowItem, {
          onRowClick: this.handleOnRowClick,
          rowNumber: index,
        });
      }
      return null;
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}

TableBody.uiName = 'TableBody';

TableBody.defaultProps = {
  selectable: false,
};

TableBody.propTypes = {
  children: PropTypes.node,
  selectable: PropTypes.bool,
};

export default TableBody;
