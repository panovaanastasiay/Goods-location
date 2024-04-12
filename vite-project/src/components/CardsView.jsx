import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
    return (
      <div className="cards-view">
        {cards.map((card, index) => (
          <ShopCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default CardsView;