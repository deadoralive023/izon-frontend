import React, { useState } from 'react';
import { Products } from '../ProductsPage'
import { Categories } from '../CategoriesPage/index.js'
import { ProductShow } from '../ProductsPage/ProductShow'
import CheckoutModal from '../CheckoutModal'
import { Cart } from '../Cart'

const params = new Object();

export const Pages = () => {
  const [currentPage, setCurrentPage] = useState("Categories");

  return (
    currentPage === "Products" ?  <Products setCurrentPage={setCurrentPage} params={params}/> :
    currentPage === "ProductShow" ? <ProductShow setCurrentPage={setCurrentPage} params={params}/> :
    currentPage === "Categories" ? <Categories setCurrentPage={setCurrentPage} params={params}/> :
    currentPage === "CheckoutModal" ?  <CheckoutModal setCurrentPage={setCurrentPage} params={params}/> :
    currentPage === "Cart" ? <Cart setCurrentPage={setCurrentPage} params={params}/> : null
  )
}
