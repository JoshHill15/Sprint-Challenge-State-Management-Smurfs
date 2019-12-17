import React, { useState } from "react";

const SmurfForm = props => {
  // const [name, setName] = useState("");
  // const [height, setHeight] = useState("");
  // const [age, setAge] = useState("");

  const [state, setState] = useState({
    name: "",
    height: "",
    age: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  // function submit(e) {
  //   e.preventDefault();
  //   setAge("")
  //   setHeight("")
  //   setName("")
  // }

  function submit1(e) {
    e.preventDefault();
    setState({
      name: "",
      age: "",
      height: ""
    });
  }

  return (
    <div>
      <div>
        <form onSubmit={submit1}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={state.name}
          />
          <br />
          <input
            type="text"
            placeholder="height"
            name="height"
            onChange={handleChange}
            value={state.height}
          />
          <br />
          <input
            type="text"
            placeholder="age"
            name="age"
            onChange={handleChange}
            value={state.age}
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={() =>
              props.pushSmurfs(props.add(state.name, state.height, state.age))
            }
          >
            Submit 
          </button>
        </form>
        <br />
      </div>

      {/* <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="height"
          name="height"
          onChange={e => setHeight(e.target.value)}
          value={height}
        />
        <br />
        <input
          type="text"
          placeholder="age"
          name="age"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => props.pushSmurfs(props.add(name, height, age))}
        >
          Submit
        </button>
      </form>
      <br />
    </div> */}
    </div>
  );
};

export default SmurfForm;
