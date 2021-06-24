import React, { useContext} from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage'
import { ProductShow } from '../ProductsPage/ProductShow'

import CheckoutModal from '../CheckoutModal'

import {SignUpForm} from '../User/Signup/index.js'
import {LoginForm} from '../User/Login/index.js'


import { Cart } from '../Cart'
import Pager from '../../context/PagerContext'

const params = new Object();

export const  Pages = () => {

    const [currentPage, setCurrentPage] = useState("Signup");

    return (
        currentPage === "Products" ?  <Products setCurrentPage={setCurrentPage}/> :
        currentPage === "ProductShow" ? <ProductShow setCurrentPage={setCurrentPage}/> :
        currentPage === "Categories" ? <Categories setCurrentPage={setCurrentPage}/> :
        currentPage === "CheckoutModal" ?  <CheckoutModal setCurrentPage={setCurrentPage} /> :
        currentPage === "Signup" ?  <SignUpForm setCurrentPage={setCurrentPage} /> :
        currentPage === "Login" ?  <LoginForm setCurrentPage={setCurrentPage} /> :

        currentPage === "Cart" ? <Cart setCurrentPage={setCurrentPage}/> : null
    )

}
