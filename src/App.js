import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const data = localStorage.getItem("user");
  console.log(data);
  if (data) {
    dispatch({
      type: "SUCCESSFUL_LOGIN",
      user: data,
    });
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/">
            <Header></Header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
