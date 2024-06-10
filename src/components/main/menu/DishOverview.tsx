import { Item } from "../../../interfaces/DeliverooRestaurant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DishOverview = ({ dishData }: { dishData: Item }) => {
  return (
    <div className="dish-overview">
      <div className="dish-left-part">
        <h3>{dishData.name}</h3>
        <p className="dish-description">{dishData.description}</p>
        <div className="dish-popular-price">
          <p className="dish-price">{dishData.price.formatted}</p>
          {dishData.popular ? (
            <div className="popular">
              <FontAwesomeIcon icon={"star"} />
              <p>Populaire</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="dish-right-part">
        {dishData.image ? (
          <img src={dishData.image.url} alt={dishData.image.altText} />
        ) : null}
      </div>
    </div>
  );
};

export default DishOverview;
