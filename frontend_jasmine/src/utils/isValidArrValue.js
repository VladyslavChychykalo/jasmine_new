const isValidArrValue = (arr) => {
  return Array.isArray(arr) && arr?.length ? true : false;
};

export default isValidArrValue;
