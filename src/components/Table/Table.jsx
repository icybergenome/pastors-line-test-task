/* eslint-disable array-callback-return */
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TableElem = ({ tableData }) => {
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

      <tbody>
        {tableRows.map((data, index) => (
          <tr key={index}>
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
};

export default TableElem;
