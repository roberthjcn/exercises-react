import React, { useState, useContext } from "react";

export interface IPerson {
  name: string;
  email: string;
}

const personContext = React.createContext<IPerson | undefined>(undefined);
const personContextChange = React.createContext(() => {});

export function usePersonToggle() {
  return useContext(personContextChange);
}

export function usePersonContext() {
  return useContext(personContext);
}

export function PersonProvider(props: any) {
  const [person, setPerson] = useState<IPerson>();

  const handleChangeLogin = () => {
    if (person) {
      setPerson(undefined);
    } else {
      setPerson({
        name: "Roberth Jumbo",
        email: "roberth@icloud.com",
      });
    }
  };

  return (
    <personContext.Provider value={person}>
      <personContextChange.Provider value={handleChangeLogin}>
        {props.children}
      </personContextChange.Provider>
    </personContext.Provider>
  );
}
