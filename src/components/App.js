import { Products } from '../components/ProductsPage'
import { ProductShow } from '../components/ProductsPage/ProductShow'
import { Navbar } from '../components/Navbar/index.js'
import { Footer } from '../components/Footer/index.js'
import { Routes } from '../Router.js'

import { Categories } from '../components/CategoriesPage/index.js'

//   return (
//     <Router>
//       <div>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );


export const App = () => {
    return (
        <>
        <Navbar />
        <Routes />

        {/* <ProductShow/> */}
        {/* <Categories /> */}
        <Footer />
        </>
    )
}

