// import { Header } from '../components/layout/header.js'
// import { Content } from '../components/layout/content.js'

import { Products } from '../components/ProductsPage'
import { Categories } from '../components/CategoriesPage/index.js'
import { Navbar } from '../components/Navbar/index.js'



export const App = () => {
    return (
        <div className="App">
             <Navbar />
            
             {/* <Products /> */}
             <Categories />

        </div>
    )
}

