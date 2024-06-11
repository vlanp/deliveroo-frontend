import { Dispatch, SetStateAction } from "react";
import DishCounter from "../../interfaces/DishCounter";
import BasketDish from "./basket/BasketDish";
import DeliverooRestaurant from "../../interfaces/DeliverooRestaurant";

const Basket = ({
  data,
  dishCounterList,
  setDishCounterList,
}: {
  data: DeliverooRestaurant;
  dishCounterList: Array<DishCounter>;
  setDishCounterList: Dispatch<SetStateAction<Array<DishCounter>>>;
}) => {
  const calculateSubTotal = () => {
    let subTotal = 0;
    for (let i = 0; i <= dishCounterList.length - 1; i++) {
      const dishCounter = dishCounterList[i];
      const price = data.items.filter((item) => {
        return item.id === dishCounter.id;
      })[0].price.fractional;
      subTotal += price * dishCounter.counter;
    }
    subTotal = subTotal / 100;
    return subTotal;
  };
  const subTotal = calculateSubTotal();
  const deliveryFee = 2.5;

  return (
    <div className="basket-space">
      <div className="valid-basket">
        <button
          className={
            dishCounterList.length === 0 ? "valid-basket-disabled" : ""
          }
        >
          Valider mon panier
        </button>
      </div>
      {dishCounterList.length === 0 ? (
        <p className="empty-basket">Votre panier est vide</p>
      ) : (
        <>
          <div className="basket">
            {dishCounterList.map((dishCounter) => {
              return (
                <BasketDish
                  key={dishCounter.id}
                  dishCounterList={dishCounterList}
                  setDishCounterList={setDishCounterList}
                  dish={
                    data.items.filter((item) => {
                      return item.id === dishCounter.id;
                    })[0]
                  }
                />
              );
            })}
          </div>
          <div className="total-without-delivery">
            <div>
              <p>Sous-total</p>
              <p>{subTotal.toFixed(2).replace(".", ",") + " €"}</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p>{deliveryFee.toFixed(2).replace(".", ",") + " €"}</p>
            </div>
          </div>
          <div className="total-basket">
            <div>
              <p>Total</p>
              <p>
                {(subTotal + deliveryFee).toFixed(2).replace(".", ",") + " €"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
