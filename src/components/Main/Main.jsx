import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import "../Main/Main.css";
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
              return (
                <li key={item._id}>
                  <h2 className="card__name">{item.name}</h2>
                  <img
                    className="card__image"
                    src={item.link}
                    alt={item.name}
                  ></img>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
