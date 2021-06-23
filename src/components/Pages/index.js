import React, { useContext} from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage'
import { ProductShow } from '../ProductsPage/ProductShow'
import { CheckoutModal } from '../CheckoutModal'
import { Cart } from '../Cart'
import Pager from '../../context/PagerContext'

const params = new Object();

export const Pages = () => {
  const [context] = useContext(Pager);

  return (
    context.currentPage === "Products" ?  <Products /> :
    context.currentPage === "ProductShow" ? <ProductShow /> :
    context.currentPage  === "Categories" ? <Categories />:
    context.currentPage  === "CheckoutModal" ?  <CheckoutModal /> :
    context.currentPage  === "Cart" ? <Cart /> : null
  )
}
