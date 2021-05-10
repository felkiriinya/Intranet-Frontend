import React from 'react';
const Table = ({thead,tbody}) => {
    return (
      <table className="table table-bordered table-sm table-striped">
        <thead>
    {thead}
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    );
}
 
export default Table;