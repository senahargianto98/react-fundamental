import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function FetchDataFunction() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setData((d) => [...d, "data1"]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {data.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
}
