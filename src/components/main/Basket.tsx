import { Dispatch, SetStateAction, useState } from "react";
import DishCounter from "../../interfaces/DishCounter";
import BasketDish from "./basket/BasketDish";
import DeliverooRestaurant from "../../interfaces/DeliverooRestaurant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basket = ({
  data,
  dishCounterList,
  setDishCounterList,
}: {
  data: DeliverooRestaurant;
  dishCounterList: Array<DishCounter>;
  setDishCounterList: Dispatch<SetStateAction<Array<DishCounter>>>;
}) => {
  const [showBasket, setShowBasket] = useState(false);
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
  const calculateNbArtible = () => {
    let nbArtible = 0;
    for (let i = 0; i <= dishCounterList.length - 1; i++) {
      const dishCounter = dishCounterList[i];
      nbArtible += dishCounter.counter;
    }
    return nbArtible;
  };
  const subTotal = calculateSubTotal();
  const deliveryFee = 2.5;
  const nbArticle = calculateNbArtible();

  return (
    <div className="basket-space">
      {showBasket ? (
        <div
          className="close-basket"
          onClick={() => {
            setShowBasket(false);
          }}
        >
          <FontAwesomeIcon icon={"xmark"} />
        </div>
      ) : null}
      <div className="valid-basket">
        <button
          className={
            dishCounterList.length === 0 ? "valid-basket-disabled" : ""
          }
        >
          Valider mon panier
        </button>
      </div>
      {nbArticle === 0 ? (
        <p className="empty-basket">Votre panier est vide</p>
      ) : (
        <>
          <div className={"basket" + (showBasket ? " show-flex" : "")}>
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
          <div
            className={
              "total-without-delivery" + (showBasket ? " show-flex" : "")
            }
          >
            <div>
              <p>Sous-total</p>
              <p>{subTotal.toFixed(2).replace(".", ",") + " €"}</p>
            </div>
            <div>
              <p>Frais de livraison</p>
              <p>{deliveryFee.toFixed(2).replace(".", ",") + " €"}</p>
            </div>
          </div>
          <div className={"total-basket" + (showBasket ? " show-block" : "")}>
            <div>
              <p>Total</p>
              <p>
                {(subTotal + deliveryFee).toFixed(2).replace(".", ",") + " €"}
              </p>
            </div>
          </div>
        </>
      )}
      {nbArticle === 0 ? (
        <div className="empty-little-screen-basket">
          <button>Voir le panier</button>
        </div>
      ) : (
        <div
          className="little-screen-basket"
          onClick={() => {
            setShowBasket(true);
          }}
        >
          {showBasket ? null : <p>{nbArticle}</p>}
          <p>{showBasket ? "Valider mon panier" : "Voir mon panier"}</p>
          {showBasket ? null : (
            <p>
              {(subTotal + deliveryFee).toFixed(2).replace(".", ",") + " €"}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;
