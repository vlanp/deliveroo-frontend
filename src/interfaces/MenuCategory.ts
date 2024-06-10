import { Item } from "./DeliverooRestaurant";

interface MenuCategory {
  category: string;
  id: string;
  dishList: Array<Item>;
}

export default MenuCategory;
