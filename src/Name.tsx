import React, { useContext } from "react";
import { ContextApi } from "./context/app.context";

const Name: React.FC = () => {
  const res = useContext(ContextApi);
  return <div>{res.name}</div>;
};

export default Name;
