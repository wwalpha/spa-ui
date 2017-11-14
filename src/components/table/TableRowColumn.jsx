
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/common/table/tableRowColumn.css';

class TableRowColumn extends Component {

  render() {
    const { width } = this.props;
    let { style } = this.props;

    if (width) style = { ...this.props.style, width };

    return (
      <td
        className={css.rowColumn}
        style={style}
      >
        {this.props.children}
      </td>
    );
  }
}

TableRowColumn.defaultProps = {
};

TableRowColumn.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
  /* eslint-disable react/no-unused-prop-types */
  columnNo: PropTypes.number,
  /* eslint-enable react/no-unused-prop-types */
  width: PropTypes.string,
  /* eslint-enable react/no-unused-prop-types */
  onRowColumnClick: PropTypes.func,
};

export default TableRowColumn;
