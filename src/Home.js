import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import React, { useState } from 'react';


export default function Home() {
  // Access the current counter value from Redux
  const counterVal = useSelector((state) => state.counter);
  // Access the myDetails state to log the details 
  // these 
  const details = useSelector((state) => state.myDetails);
  const[status,setStatus] = useState(true);
  const dispatch = useDispatch();

  

  // Increment counter
  const INCREMENT = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  // Decrement counter
  const DECREMENT = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  // Save details
  const storeMyDetails = () => {
    dispatch({
      type: "saveDetails",
      data: { name: "Adithi", email: "adithi@gmail.com" },
    });
  };

  // Log details in the console
  if (details) {
    console.log("Details from Redux:", details);
  }

  return (
    <div>
       {(status)?<p className="red">This is a paragraph</p>:null}
      <h1>Home Page</h1>
      <h2>from Redux {counterVal}</h2>
      <Header />
      <input type="button" value="INCREMENT" onClick={INCREMENT} />
      <input type="button" value="DECREMENT" onClick={DECREMENT} />
      <input type="button" value="Submit Details" onClick={storeMyDetails} />
    </div>
   
  );
}
