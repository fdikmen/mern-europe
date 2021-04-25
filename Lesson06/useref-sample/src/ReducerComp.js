import React, { useState, useReducer } from "react";
import {dogReducer as myReducer} from './reducers/dogReducer'

const myInitialState = { data: "", loading: "", error: "" };

function ReducerComp() {
  /*const [data,setData]=useState("")
    const [loading,setLoad] = useState(false)
    const [error,setError] = useState("")*/
  const [state, dispatch] = useReducer(myReducer, myInitialState);

  const fetchingDog = () => {
    /*setLoad(true)
        setData("")
        setError("")*/
    dispatch({ type: "FETCH_START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((result) => {
        /*setLoad(false)
                                setData(result.message)*/
        dispatch({ type: "FETCH_SUCCESS", payload: result.message });
      })
      .catch(() => {
        /*setLoad(false);setError("Error fetching data.")*/
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data." });
      });
  };
  console.log(state);
  return (
    <div>
      <hr />
      <button onClick={fetchingDog} disabled={state.loading}>
        Fetch Dog
      </button>
      {state.loading && <p>Loading ...</p>}
      {state.data && (
        <div>
          {" "}
          <img src={state.data} alt="Random Dog" />
        </div>
      )}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}

export default ReducerComp;
