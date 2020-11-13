import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "./Config";
//import { LazyLoadImage } from "react-lazy-load-image-component";
//import "react-lazy-load-image-component/src/effects/blur.css";

//useEffect
//whenever changed detected useEffect is called.
//If Component loaded successfully then useEffect lifecycle will execute.

function GetCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    asyncCall().then((posRes:any)={

    }, ()=>{});

  function asyncCall():any{
      return axios.get("");
  }
  return (
    <div>
      <button>ClickME</button>
    </div>
  );
}

export default GetCountries;
