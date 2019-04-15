import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Id1 from './Id1';
import Id2 from './Id2';

function Example() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/:id" render={(props) => <Id1 {...props} />} /> */}
        <Route exact path="/" component={Id1} />
        <Route path="/:id" component={Id2} />
      </Switch>
    </Router>
  );
}

export default Example;