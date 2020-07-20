import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";

const CategoryPage = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push(`${props.match.url}/randomid`)}>
        To Specific Topic
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/category/:id" component={CategoryPage} exact />
      </Switch>
    </div>
  );
}

export default App;
