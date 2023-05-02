import React, {FormEvent, useRef} from "react";


const Form = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);


    const handelSubmit = (event : FormEvent) =>{
        event.preventDefault()
        if(nameRef.current != null)
         console.log(nameRef.current.value)
        if(ageRef.current != null)
        console.log(ageRef.current.value)
    
    }


  return (
    <form onSubmit={handelSubmit}> 
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
