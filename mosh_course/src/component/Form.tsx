import React, { FormEvent, useState } from "react";


  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
  };


  const Form = () => {
    const [person, setPerson] = useState({
      name: '',
      age: 0
    })
  }

  return (
    <form onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input onChange={(event) => setPerson({ ...person ,name:event.target.value})} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};


export default Form;
