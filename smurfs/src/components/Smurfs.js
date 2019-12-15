import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs, pushSmurfs } from "../actions/smurfAction";
import SmurfForm from "./SmurfForm";

function Smurfs(props) {
 
  function add(n, h, a){
    return {
        name: n,
        height: h,
        age: a,
        id: Date.now() 
    }
}

  return (
    <div>
      <SmurfForm add = {add} pushSmurfs = {props.pushSmurfs} />
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
