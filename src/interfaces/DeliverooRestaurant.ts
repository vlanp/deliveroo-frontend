interface DeliverooRestaurant {
  meta: Meta;
  items: Array<Item>;
}

// META

interface Meta {
  metatags: Metatags;
  restaurant: Restaurant;
  categories: Array<Category>;
}

interface Metatags {
  descriptionSocial: string;
  image: string;
}

interface Restaurant {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

// ITEM

interface Item {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: Price;
  priceDiscounted: Price;
  image?: Image;
  popular: boolean;
  available: boolean;
}

interface Price {
  code: string;
  fractional: number;
  formatted: string;
}

interface Image {
  altText: string;
  url: string;
}

export default DeliverooRestaurant;
export type { Item };
