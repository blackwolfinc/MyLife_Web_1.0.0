import "./app.scss"
import { Page1 } from "./Pages/Page1"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page2 } from "./Pages/Page2";


function App() {
  return (
    <div className="App">

    
    <BrowserRouter>
      <Switch>
        <Route path="/Home">
        <Page1/>
        </Route>
        <Route path="/TanksPage">
      <Page2/>
        </Route>
        <Route path="/">
        <Page1/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
