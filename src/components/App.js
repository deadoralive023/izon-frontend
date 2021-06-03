import { useQuery } from '@apollo/react-hooks'
import GET_CATEGORIES from '../requests/category/query.js'

export default function Categories(){
    const { loading, error, data}  = useQuery(GET_CATEGORIES);
    console.log(data);
    return loading ? <h2> Loading! </h2> : <p> {data.categories[0].name}</p>
}
