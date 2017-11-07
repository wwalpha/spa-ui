
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './css/header.css';

class TableBody extends Component {

  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
}

TableBody.uiName = 'TableBody';

TableBody.defaultProps = {
};

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;
