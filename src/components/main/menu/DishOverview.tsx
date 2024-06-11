import { Item } from "../../../interfaces/DeliverooRestaurant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DishCounter from "../../../interfaces/DishCounter";
import { Dispatch, SetStateAction } from "react";

const DishOverview = ({
  dishData,
  dishCounterList,
  setDishCounterList,
}: {
  dishData: Item;
  dishCounterList: Array<DishCounter>;
  setDishCounterList: Dispatch<SetStateAction<Array<DishCounter>>>;
}) => {
  const handleClick = () => {
    const index = dishCounterList.findIndex((dishCounter) => {
      return dishCounter.id === dishData.id;
    });
    if (index !== -1) {
      const copyDishCounterList = [...dishCounterList];
      copyDishCounterList[index].counter++;
      setDishCounterList(copyDishCounterList);
    } else {
      setDishCounterList([...dishCounterList, { id: dishData.id, counter: 1 }]);
    }
  };

  return (
    <div className="dish-overview" onClick={handleClick}>
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
