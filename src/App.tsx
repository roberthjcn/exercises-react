import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import NumberPositive from "./components/NumberPositive/NumberPositive";
import { PersonProvider } from "./providers/Provider";
import RenderPerson from "./components/RenderPerson/RenderPerson";
import {
  ExampleWithGreeting,
  ExampleWithGreeting2,
} from "./components/GreetingText/GreetingText";
function App() {
  return (
    <Grid container>
      <Grid item>
        <ExampleWithGreeting />
      </Grid>
      <Grid item>
        <ExampleWithGreeting2 />
      </Grid>
    </Grid>
  );
}

export default App;
