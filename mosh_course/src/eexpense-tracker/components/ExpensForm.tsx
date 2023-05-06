import React from "react";
import { categorys } from "../../App";


const ExpensForm = () => {
  return (
    <form action="">
      <div className="mb3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="" id="category" className="form-select">
          <option value=""></option>
          {categorys.map((categorys) => (
            <option key={categorys} value={categorys}>
              {categorys}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpensForm;
