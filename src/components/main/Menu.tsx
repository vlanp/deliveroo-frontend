import DeliverooRestaurant from "../../interfaces/DeliverooRestaurant";
import Category from "./menu/Category";
import DishOverview from "./menu/DishOverview";
import MenuCategory from "../../interfaces/MenuCategory";
import DishCounter from "../../interfaces/DishCounter";
import { Dispatch, SetStateAction } from "react";

const Menu = ({
  data,
  dishCounterList,
  setDishCounterList,
}: {
  data: DeliverooRestaurant;
  dishCounterList: Array<DishCounter>;
  setDishCounterList: Dispatch<SetStateAction<Array<DishCounter>>>;
}) => {
  const categoryList = data.meta.categories;
  const copyCategoryList = [...categoryList];
  const menuCategoryList: Array<MenuCategory> = [];
  for (let i = 0; i <= copyCategoryList.length - 1; i++) {
    const category = copyCategoryList[i];
    const itemList = data.items.filter((item) => {
      return item.categoryId === category.id;
    });
    menuCategoryList.push({
      category: category.name,
      id: category.id,
      dishList: itemList,
    });
  }

  return (
    <section className="restaurant-menu">
      {menuCategoryList.map((menuCategory) => {
        return (
          <div key={menuCategory.id} className="menu-categories">
            <Category category={menuCategory.category} />
            <div className="menu-categories-dishes">
              {menuCategory.dishList.map((dish) => {
                return (
                  <DishOverview
                    key={dish.id}
                    dishData={dish}
                    dishCounterList={dishCounterList}
                    setDishCounterList={setDishCounterList}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
