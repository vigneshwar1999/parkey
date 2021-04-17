import "./styles.css";
import Home from "./Home";
import Booking from "./Booking";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Booking">
            <Booking />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
