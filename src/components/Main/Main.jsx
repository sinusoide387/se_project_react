import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import "../Main/Main.css";
import ItemCard from "../ItemCard/ItemCard";
import PropTypes from "prop-types";
function Main({ weather }) {
  // weather viene del componente App.js

  return (
    <div>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75° F / You may want to wear:</p>
        <div className="cards__list-container">
          <ul className="cards__list">
            {defaultClothingItems
              // .filter((item) => {
              //   return item.weather === weather.type;
              // })
              .map((item) => {
                return <ItemCard key={item._id} item={item} />;
              })}
          </ul>
        </div>
      </section>
    </div>
  );
}
Main.propTypes = {
  weather: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};
export default Main;
