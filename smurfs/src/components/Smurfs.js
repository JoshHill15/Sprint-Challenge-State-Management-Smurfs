import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs, pushSmurfs } from "../actions/smurfAction";

function Smurfs(props) {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  function submit(e) {
    e.preventDefault();
    // add(name, height, age)
  }
  console.log("smurf props", props);

  function add(n, h, a){

      let item = {
          name: n,
          height: h,
          age: a,
          id: Date.now() 
      }
      return item
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
        <button onClick={() => props.pushSmurfs(add(name, height, age))}>Submit</button>

      </form><br/>
      <button onClick={() => props.getSmurfs()}>Smurfs!</button>
      {!props.smurfs && <p>GET SOME BLUE PEOPLE!</p>}
      {props.smurfs && (
        <p>
          {props.smurfs.map(cv => (
            <p key={cv.id}>
              {cv.name}
              <br />
              {cv.height}
              <br />
              {cv.age}
            </p>
          ))}
        </p>
      )}
      {props.error && <p>{props.error}</p>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    error: state.error,
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, { getSmurfs, pushSmurfs })(Smurfs);
