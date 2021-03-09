import "./app.scss"
import { Page1 } from "./Pages/Page1"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Page2 } from "./Pages/Page2";
import { Halaman4 } from "./Pages/Halaman4";
import { Halaman2 } from "./Pages/Halaman2";
import { LoginPage } from "./Pages/LoginPage";
import { Halaman3 } from "./Pages/Halaman3";


function App() {
  return (
    <div className="App">

    
    <BrowserRouter>
      <Switch>
        <Route path="/Endpage">
        <Halaman4/>
        </Route>
        <Route path="/Page3">
        <Halaman3/>
        </Route>
        <Route path="/Page2">
        <Halaman2/>
        </Route>
        <Route path="/Homepage">
        <LoginPage/>
        </Route>
        <Route path="/">
        <LoginPage/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
