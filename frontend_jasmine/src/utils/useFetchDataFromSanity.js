import React, { useState, useEffect } from "react";

const useFetchDataFromSanity = ({ query }) => {
  const [data, setData] = useState(null);

  useEffect(() => {}, []);

  return { data };
};

export default useFetchDataFromSanity;
