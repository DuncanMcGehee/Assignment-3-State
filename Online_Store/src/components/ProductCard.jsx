import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={image}
        alt={name}
      />

      <div className="product-card-content">
        <h2>{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>

        <button className="product-button">
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
