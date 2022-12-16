import { CategoriesProvider } from '../../contexts/categories.context';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.style.scss';

const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route path=":category" element={<Category/>} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
