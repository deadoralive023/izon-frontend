import React, { useState } from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage/index.js'
import { ProductShow } from '../ProductsPage/ProductShow'
import CheckoutModal from '../CheckoutModal'

import {SignUpForm} from '../User/Signup/index.js'
import {LoginForm} from '../User/Login/index.js'



// import { Navbar } from '../Navbar/index.js'



import { Cart } from '../Cart'


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
