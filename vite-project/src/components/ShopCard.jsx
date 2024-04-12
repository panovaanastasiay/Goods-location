const ShopCard = ({ name, price, color, img }) => {
    return (
      <div className="shop-card">
        <img src={img} alt={name} className="shop-card__image" />
        <div className="shop-card__details">
          <h3 className="shop-card__name">{name}</h3>
          <p className="shop-card__color">Color: {color}</p>
          <p className="shop-card__price">Price: ${price}</p>
        </div>
      </div>
    );
  };
  
  export default ShopCard;