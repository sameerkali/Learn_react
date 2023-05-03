import React from "react";

const table = () => {
  return (
    <div className="table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Delite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>

            <button className="btn btn-danger ">delite</button>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>

            <button className="btn btn-danger ">delite</button>
          </tr>
          <tr>
            <td>Thornton</td>
            <td>Otto</td>
            <td>sameer</td>
            <button className="btn btn-danger ">delite</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
