import React, { useContext } from "react";
import { ContextApi } from "./context/app.context";

const Counter: React.FC = () => {
  const res = useContext(ContextApi);
  return <div>{res.count}</div>;
};

export default Counter;
