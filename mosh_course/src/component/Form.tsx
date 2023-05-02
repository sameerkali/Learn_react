import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data : FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {required: true, minLength: 3, maxLength: 16})}
          type="text"
          id="name"
          className="form-control"
        />
        { errors.name?.type === 'required' && <p>The name field is require.</p>}
        { errors.name?.type === 'minLength' && <p style={{color: "red"}}>The name must be more then 3 charactors.</p>}
        { errors.name?.type === 'maxLength' && <p style={{color: "red"}}>The name must be less then 16 charactors.</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit hai
      </button>
    </form>
  );
};

export default Form;
