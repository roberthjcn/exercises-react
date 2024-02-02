import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface IData {
  name: string;
  lastName: string;
  age: number;
}

const Form = () => {
  const [data, setData] = useState<IData>({
    name: "",
    lastName: "",
    age: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
  };

  const manejarSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: Añadir lógica de enviar el request del form al backend
    console.log("Data submitted: ", data);
    setData({ name: "", lastName: "", age: 0 });
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => {
        //TODO: Manipulacion de datos devueltos por la APi
        console.log("POKEMON: ", data);
      });
  }, []);

  return (
    <Grid
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
      container
    >
      <form onSubmit={manejarSubmit}>
        <Grid item>
          <input
            type="text"
            placeholder="Nombre"
            value={data.name}
            onChange={handleChange}
            name="name"
          />
        </Grid>
        <Grid item>
          <input
            type="text"
            placeholder="Apellido"
            value={data.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </Grid>
        <Grid>
          <input
            type="number"
            placeholder="Edad"
            value={data.age}
            onChange={handleChange}
            name="age"
          />
        </Grid>
        <Grid item>
          <input type="submit" value="Enviar" />
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
