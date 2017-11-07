
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Table from './Table';
import TableHeader from './TableHeader';
import TableHeaderColumn from './TableHeaderColumn';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableRowColumn from './TableRowColumn';
// import css from './css/table.css';

class Example extends Component {

  render() {
    const rows = [];
    for (let i = 0; i < 100; i += 1) {
      rows.push((
        <TableRow key={i}>
          <TableRowColumn>ROW_AAA</TableRowColumn>
          <TableRowColumn>ROW_BBB</TableRowColumn>
          <TableRowColumn>ROW_CCC</TableRowColumn>
          <TableRowColumn>ROW_DDD</TableRowColumn>
          <TableRowColumn>ROW_EEE</TableRowColumn>
        </TableRow>
      ));
    }

    return (
      <Table fixHeader>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn sortable>AAA</TableHeaderColumn>
            <TableHeaderColumn>BBB</TableHeaderColumn>
            <TableHeaderColumn>CCC</TableHeaderColumn>
            <TableHeaderColumn>DDD</TableHeaderColumn>
            <TableHeaderColumn>EEE</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    );
  }
}

Example.defaultProps = {
};

Example.propTypes = {
};

export default Example;
