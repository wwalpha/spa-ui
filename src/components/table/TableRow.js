
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './css/header.css';

class TableRow extends Component {

  render() {
    const children = React.Children.map(this.props.children, (item, index) => React.cloneElement(item, {
      columnNo: index,
    }));

    return (
      <tr>
        {children}
      </tr>
    );
  }
}

TableRow.uiName = 'TableRow';
TableRow.defaultProps = {
};

TableRow.propTypes = {
  children: PropTypes.node,
  // label: PropTypes.string,
  // style: PropTypes.string,
};

export default TableRow;
