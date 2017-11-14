
import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ExampleM extends Component {

  render() {
    const rows = [];
    for (let i = 0; i < 100; i += 1) {
      rows.push((
        <TableRow key={i}>
          <TableRowColumn style={{ width: '50px' }}>ROW_AAA</TableRowColumn>
          <TableRowColumn style={{ width: '100px' }}>ROW_BBB</TableRowColumn>
          <TableRowColumn style={{ width: '150px' }}>ROW_CCC</TableRowColumn>
          <TableRowColumn style={{ width: '200px' }}>ROW_DDD</TableRowColumn>
          <TableRowColumn style={{ width: '300px' }}>ROW_EEE</TableRowColumn>
        </TableRow>
      ));
    }

    return (
      <Table fixedHeader height="200px">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={{ width: '50px' }}>AAA</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '100px' }}>BBB</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '150px' }}>CCC</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '200px' }}>DDD</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '300px' }}>EEE</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    );
  }
}

ExampleM.defaultProps = {
};

ExampleM.propTypes = {
};

export default ExampleM;
