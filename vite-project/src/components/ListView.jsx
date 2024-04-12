import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
    return (
      <div className="list-view">
        {items.map((item, index) => (
          <ShopItem key={index} {...item} />
        ))}
      </div>
    );
  };
  
  export default ListView;