
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
          <TableRowColumn>{i}</TableRowColumn>
          <TableRowColumn>ROW_BBB</TableRowColumn>
          <TableRowColumn>ROW_CCC</TableRowColumn>
          <TableRowColumn>ROW_DDD</TableRowColumn>
          <TableRowColumn>ROW_EEE</TableRowColumn>
        </TableRow>
      ));
    }

    return (
      <Table fixedHeader height="400px">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn width="50px" sortable>AAA</TableHeaderColumn>
            <TableHeaderColumn width="50px">BBB</TableHeaderColumn>
            <TableHeaderColumn width="50px">CCC</TableHeaderColumn>
            <TableHeaderColumn width="50px">DDD</TableHeaderColumn>
            <TableHeaderColumn width="50px">EEE</TableHeaderColumn>
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
