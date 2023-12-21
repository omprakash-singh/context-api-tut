import React, { ReactNode, createContext, useEffect, useState } from "react";
interface DefaultValue {
  count: number;
  name: string;
  handleCounter: () => void;
  handleName: (value: string) => void;
}
export const ContextApi = createContext<DefaultValue>({
  count: 0,
  name: "",
  handleCounter: () => {},
  handleName: () => {},
});

interface MyContextProviderProps {
  children: ReactNode;
}
export const Context: React.FC<MyContextProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName("Omprakash singh");
  }, []);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const initialValue: DefaultValue = {
    count,
    name,
    handleCounter,
    handleName,
  };

  return (
    <ContextApi.Provider value={initialValue}>{children}</ContextApi.Provider>
  );
};
