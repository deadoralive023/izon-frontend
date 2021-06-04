import CategoriesPage from '../components/categories/index.js'
import { Header } from '../components/layout/header.js'
import { Content } from '../components/layout/content.js'

import { Products } from '../components/products/index.js'

export const App = () => {
    return (
        <div className="App">
             <Products />
        </div>
    )
}

