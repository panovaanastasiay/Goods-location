const ShopItem = ({ name, price, color, img }) => {
    return (
      <div className="shop-item">
        <img src={img} alt={name} className="shop-item__image" />
        <div className="shop-item__details">
          <h3 className="shop-item__name">{name}</h3>
          <p className="shop-item__color">Color: {color}</p>
          <p className="shop-item__price">Price: ${price}</p>
        </div>
      </div>
    );
  };
  
  export default ShopItem;