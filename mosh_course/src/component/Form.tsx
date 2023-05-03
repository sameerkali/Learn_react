import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 chatacters" }),
  age: z
    .number({ invalid_type_error: "Age fiels is required" })
    .max(100)
    .min(18),
  sel: z.string().length(2, { message: "Must select one item" })
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Item
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Amount
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <div>
        <label htmlFor="select" className="form-label">
          Category
        </label>
         
        <select    {...register("sel")} className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
        {errors.sel && <p className="text-danger">{errors.sel.message}</p>}
      </div>

      <button
        /* disabled={!isValid} */ className="btn btn-primary m-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
