import React, { useContext} from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage'
import { ProductShow } from '../ProductsPage/ProductShow'
import { SignUpForm } from '../User/Signup/index.js'
import { LoginForm } from '../User/Login/index.js'
import { Cart } from '../Cart'
import Pager from '../../context/PagerContext'

export const Pages = () => {
    const [context, setContext] = useContext(Pager);

    return (
        context.currentPage === "Login" ?  <LoginForm  /> :
        context.currentPage === "SignUp" ?  <SignUpForm /> :
        context.currentPage === "Products" ?  <Products /> :
        context.currentPage === "ProductShow" ? <ProductShow /> :
        context.currentPage === "Categories" ? <Categories /> :
        context.currentPage === "Cart" ? <Cart /> : null
    )
}
