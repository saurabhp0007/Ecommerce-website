import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { ProductId } = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct />
    </div>
  );
};


