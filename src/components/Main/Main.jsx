import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
function Main() {
  console.log(defaultClothingItems);
  return (
    <div>
      <WeatherCard />
      <section className="cards"></section>
      <p className="cards__text">Today is 75° F / You may want to wear:</p>
      <ul className="class__list">
        {defaultClothingItems.map((item) => {
          return (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <img src={item.link} alt={item.name}></img>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
