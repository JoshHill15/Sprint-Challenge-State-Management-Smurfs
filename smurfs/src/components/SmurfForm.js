import React, { useState } from "react";

const SmurfForm = props => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
  
    function submit(e) {
      e.preventDefault();
      setAge("")
      setHeight("")
      setName("")
    }

  return (
    <div>
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
    </div>
  );
};

export default SmurfForm;
