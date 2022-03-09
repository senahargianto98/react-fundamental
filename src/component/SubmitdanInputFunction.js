import React from "react";

export default function SubmitdanInputFunction() {
  const [values, setValues] = React.useState("");
  const [values1, setValues1] = React.useState("");
  const handleSubmit = () => {
    console.log(values);
    console.log(values1);
  };
  //   React.useEffect(() => {
  //     console.log(values);
  //     console.log(values1);
  //   });
  return (
    <div>
      <div>
        <h1>{values}</h1>
        <label>
          Number of guests:
          <input values={values} onChange={(e) => setValues(e.target.value)} />
        </label>
        <label>
          Number of guests1:
          <input
            values={values1}
            onChange={(e) => setValues1(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
