
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryItem } from '../../store/categories/category.types';
import './category-preview.style.scss';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => {
  
  return (
    <div className='category-preview-container'>
      <div className='category-previe-header-title'>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      </div>
      <div className='preview'>
        {
          products
            .filter((_, idx) => idx < 4 )
            .map((product) => 
            <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default CategoryPreview;

