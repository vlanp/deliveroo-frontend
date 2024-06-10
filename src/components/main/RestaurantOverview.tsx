import DeliverooRestaurant from "../../interfaces/DeliverooRestaurant";

const RestaurantOverview = ({ data }: { data: DeliverooRestaurant }) => {
  console.log(data);
  return (
    <section className="restaurant-overview container">
      <div>
        <h1>{data.meta.restaurant.name}</h1>
        <p>{data.meta.metatags.descriptionSocial}</p>
      </div>
      <div>
        <img src={data.meta.metatags.image} alt={data.meta.restaurant.name} />
      </div>
    </section>
  );
};

export default RestaurantOverview;
