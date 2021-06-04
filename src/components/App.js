import { Header } from '../components/layout/header.js'
import { Content } from '../components/layout/content.js'

import { Products } from './products/Index.js'
import { Categories } from './categories/Index.js'


export const App = () => {
    return (
        <div className="App">
             {/* <Products /> */}
             <Categories />

        </div>
    )
}


// const [stars, setStars] = useState(5);

// setStars(4);