import PropTypes from "prop-types";
function ItemCard({ item }) {
  return (
    <li className="card__item">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__image" src={item.link} alt={item.name}></img>
    </li>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
