import { Product } from '@shared/types';
import s from './ProductCard.module.scss';
interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, fullPrice, screen, capacity, ram } = product;

  return (
    <article className={s.productCard}>
      <img src={image} alt={name} className={s.productImage} />
      <p className={s.productName}>{name}</p>
      <p className={s.fullPrice}>${fullPrice}</p>
      <ul className={s.productSpecs}>
        <li className={s.productSpec}>
          <p className={s.productSpecText}>Screen:</p>
          <p className={s.productSpecValue}>{screen}</p>
        </li>
        <li className={s.productSpec}>
          <p className={s.productSpecText}>Capacity:</p>
          <p className={s.productSpecValue}>{capacity}</p>
        </li>
        <li className={s.productSpec}>
          <p className={s.productSpecText}>RAM:</p>
          <p className={s.productSpecValue}>{ram}</p>
        </li>
      </ul>
      <div className={s.productCardButtons}>
        <button className={s.addToCart}>Add to cart</button>
        <button className={s.iconHeart}>icon heart</button>
      </div>
    </article>
  );
};
