
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/common/table/table.css';

const styles = {
  fixedHeaderTop: {
    overflow: 'auto',
  },
  fixedHeaderBottom: {
    overflowX: 'hidden',
    overflowY: 'auto',
  },
};

class Table extends Component {

  render() {
    const {
      fixedHeader, children, width, height,
    } = this.props;

    let tHeader;
    let tBody;

    React.Children.forEach(children, (tableItem) => {
      if (tableItem.type.uiName === 'TableHeader') {
        tHeader = React.cloneElement(tableItem, {
          children: React.Children.map(tableItem.props.children, (row) => {
            const rowChildren = React.Children.map(row.props.children, (item) => {
              // Sortableの列をチェックする
              if (item.props.sortable) {
                return React.cloneElement(item, { onClick: this.props.onSort });
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

    const items = [];

    if (fixedHeader) {
      items.push(React.createElement('div', { key: 'header', className: css.fixedHeaderTop },
        React.createElement('table', { className: css.table, style: { width } }, tHeader),
      ));
      items.push(React.createElement('div', { key: 'body', className: css.fixedHeaderBottom, style: { height } },
        React.createElement('table', { className: css.table, style: { width: 'auto' } }, tBody),
      ));
    } else {
      items.push(React.createElement('div', { style: { ...styles.fixedHeaderBottom, height } },
        React.createElement('table', { className: css.table, style: { width: 'auto' } }, [tHeader, tBody]),
      ));
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
  width: 'auto',
  height: '100%',
  multiSelect: false,
};

Table.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fixedHeader: PropTypes.bool,
  children: PropTypes.node,
  onSort: PropTypes.func,
  multiSelect: PropTypes.bool,
};

export default Table;
