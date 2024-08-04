import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import "../Main/Main.css";
import ItemCard from "../ItemCard/ItemCard";
function Main() {
  console.log(defaultClothingItems);
  return (
    <div>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75° F / You may want to wear:</p>
        <div className="cards__list-container">
          <ul className="cards__list">
            {defaultClothingItems.map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
