import { Product } from '@shared/types';
import s from './ProductCard.module.scss';
interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showDiscount,
}) => {
  const { image, name, fullPrice, price, screen, capacity, ram } = product;

  return (
    <article className={s.productCard}>
      <img src={image} alt={name} className={s.productImage} />
      <p className={s.productName}>{name}</p>
      <div className={s.prices}>
        {showDiscount ? (
          <>
            <p className={s.price}>${price}</p>
            <p className={`${s.fullPrice} ${s.through}`}>${fullPrice}</p>
          </>
        ) : (
          <p className={s.fullPrice}>${fullPrice}</p>
        )}
      </div>
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
        <button
          type="button"
          className={s.iconHeart}
          aria-label="Add to favorites"
        >
          <svg className={s.heartIcon} aria-hidden="true">
            <use
              href={`${import.meta.env.BASE_URL}img/sprite.svg#icon-heart`}
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
