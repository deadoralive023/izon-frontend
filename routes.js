import { Products } from '../components/ProductsPage'
import { Categories } from '../components/CategoriesPage'
import { ProductShow } from '../components/ProductsPage/ProductShow'

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
                    <Products />
                </Route>
                <Route path="/categories" exact>
                    <Categories />
                </Route>
                <Route path="/products/:id"><ProductShow /></Route>
            </Switch>
          }
        </Router>
    )
}

