import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});
export const ProductsProvider = ({children}) => {
  /* eslint-disable no-unused-vars */
  const [products, setProducts] = useState(PRODUCTS);
  /* eslint-disable no-unused-vars */
  const value = {products};
  return (
    <ProductsContext.Provider value={value} > {children} </ProductsContext.Provider>
  )
};