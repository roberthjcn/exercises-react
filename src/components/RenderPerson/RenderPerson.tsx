import React from "react";
import { usePersonContext, usePersonToggle } from "../../providers/Provider";
import { Grid } from "@material-ui/core";

const RenderPerson = () => {
  const person = usePersonContext();
  const handleChangePerson = usePersonToggle();

  return (
    <Grid>
      <h2>Componente que Hereda los datos/estados</h2>
      {person && <p>Hola {person.name}</p>}
      <p>Tu correo es: {person?.email}</p>
      <button onClick={handleChangePerson}>Cambia Login</button>
    </Grid>
  );
};

export default RenderPerson;
