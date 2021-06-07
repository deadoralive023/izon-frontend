import { Pages } from '../src/components/Pages'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const Routes = () => {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/" exact>
                    <Pages/>
                </Route>
            </Switch>
          }
        </Router>
    )
}

