import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./main/Loading";
import RestaurantOverview from "./main/RestaurantOverview";
import DeliverooRestaurant from "../interfaces/DeliverooRestaurant";
import Menu from "./main/Menu";
import Basket from "./main/Basket";
import DishCounter from "../interfaces/DishCounter";

const Main = () => {
  const [data, setData] = useState<DeliverooRestaurant>();
  const [isLoading, setIsLoading] = useState(true);
  const [dishCounterList, setDishCounterList] = useState<Array<DishCounter>>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://site--deliveroo-backend--x7c7hl9cnzx6.code.run/deliveroo";
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      {data ? (
        <>
          <RestaurantOverview data={data} />
          <section className="main-space">
            <div className="main-content container">
              <Menu
                data={data}
                dishCounterList={dishCounterList}
                setDishCounterList={setDishCounterList}
              />
              <Basket
                data={data}
                dishCounterList={dishCounterList}
                setDishCounterList={setDishCounterList}
              />
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
};

export default Main;
