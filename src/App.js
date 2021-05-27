import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Draw from './components/Draw';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/draw" component={Draw} />
      </Switch>
    </>
  );
}

export default App;
