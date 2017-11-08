
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/common/table/table.css';

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
    const { fixedHeader, children } = this.props;

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

    const table = (
      <table key={0} className={css.table}>
        {tHeader}
        {tBody}
      </table>
    );
    const items = [];

    if (fixedHeader) {
      // header
      items.push(React.cloneElement(table, { children: tHeader }));
      const colGroup = React.Children.map(tHeader.props.children, headerRow => (
        <colgroup>
          {
            React.Children.map(headerRow.props.children, headerColumn => (
              <col style={{ width: headerColumn.props.width }} />
            ))
          }
        </colgroup>
      ));

      console.log(colGroup);
      items.push(
        <div key={1} className={css.fixHeader}>
          {React.cloneElement(table, { children: [colGroup, tBody] })}
        </div>,
      );
    } else {
      items.push(table);
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

Table.defaultProps = {
  fixedHeader: false,
};

Table.propTypes = {
  // width: PropTypes.string,
  // height: PropTypes.string,
  fixedHeader: PropTypes.bool,
  children: PropTypes.node,
};

export default Table;
