/* eslint-disable array-callback-return */
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

const TableElem = ({ tableData, onRowClick }) => {
  const headers = [];
  const tableRows = [];

  tableData.map((data, i) => {
    const keys = Object.keys(data);
    const row = {};
    if (i === 0) {
      keys.map(key => headers.push(data[key].header));
    }
    keys.map(key => {
      if (key !== 'header') {
        row[key] = data[key].value;
      }
    });
    tableRows.push(row);
  });

  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {tableRows.map((data, index) => (
          <tr key={index} onClick={() => onRowClick(data)}>
            {Object.keys(data).map((column, i) => (
              <td key={i}>{data[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableElem.propTypes = {
  tableData: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default TableElem;
