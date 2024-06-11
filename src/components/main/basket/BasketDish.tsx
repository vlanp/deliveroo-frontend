import { Dispatch, SetStateAction } from "react";
import DishCounter from "../../../interfaces/DishCounter";
import { Item } from "../../../interfaces/DeliverooRestaurant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Operator from "../../../enums/Operator";

const BasketDish = ({
  dishCounterList,
  setDishCounterList,
  dish,
}: {
  dishCounterList: Array<DishCounter>;
  setDishCounterList: Dispatch<SetStateAction<Array<DishCounter>>>;
  dish: Item;
}) => {
  const counter = dishCounterList.filter((dishCounter) => {
    return dishCounter.id === dish.id;
  })[0].counter;

  const handleClick = (operator: Operator) => {
    const index = dishCounterList.findIndex((dishCounter) => {
      return dishCounter.id === dish.id;
    });
    const copyDishCounterList = [...dishCounterList];
    if (operator === Operator.Plus) {
      copyDishCounterList[index].counter++;
    } else {
      if (copyDishCounterList[index].counter === 1) {
        copyDishCounterList.splice(index, 1);
      } else {
        copyDishCounterList[index].counter--;
      }
    }
    setDishCounterList(copyDishCounterList);
  };
  return (
    <div className="dish-basket">
      <div className="left-count-dish">
        <div className="count-dish">
          <FontAwesomeIcon
            className="plus-minus-icon"
            icon={"minus"}
            onClick={() => {
              handleClick(Operator.Minus);
            }}
          />
          <p>{counter}</p>
          <FontAwesomeIcon
            className="plus-minus-icon"
            icon={"plus"}
            onClick={() => {
              handleClick(Operator.Plus);
            }}
          />
        </div>
        <p>{dish.name}</p>
      </div>
      <p>
        {((counter * dish.price.fractional) / 100)
          .toFixed(2)
          .replace(".", ",") + " €"}
      </p>
    </div>
  );
};

export default BasketDish;
