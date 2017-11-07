
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './css/table.css';

class Table extends Component {

  constructor() {
    super();
    this.state = { sortIndex: -1 };

    this.handleOnSort = this.handleOnSort.bind(this);
  }

  /** sort column click */
  handleOnSort(columnNo) {
    this.setState({ sortIndex: columnNo });
  }

  render() {
    const { fixHeader, children } = this.props;

    let tHeader;
    let tBody;

    React.Children.forEach(children, (tableItem) => {
      if (tableItem.type.uiName === 'TableHeader') {
        tHeader = React.cloneElement(tableItem, {
          children: React.Children.map(tableItem.props.children, (row) => {
            const rowChildren = React.Children.map(row.props.children, (item) => {
              // Sortableの列をチェックする
              if (item.props.sortable) {
                return React.cloneElement(item, {
                  onClick: this.handleOnSort,
                });
              }

              return item;
            });

            return React.cloneElement(row, { children: rowChildren });
          }),
        });
      }

      if (tableItem.type.uiName === 'TableBody') {
        tBody = tableItem;
      }
    });

    const table = [];

    if (fixHeader) {
      // header
      table.push((
        <table key={0}>
          {tHeader}
        </table>
      ));
      // rows
      table.push((
        <div key={1} className={css.fixHeader}>
          <table>
            {tBody}
          </table>
        </div>
      ));
    } else {
      table.push((
        <table>
          {tHeader}
          {tBody}
        </table>
      ));
    }

    return (
      <div>
        {table}
      </div>
    );
  }
}

Table.defaultProps = {
  fixHeader: false,
};

Table.propTypes = {
  // width: PropTypes.string,
  // height: PropTypes.string,
  fixHeader: PropTypes.bool,
  children: PropTypes.node,
};

export default Table;
