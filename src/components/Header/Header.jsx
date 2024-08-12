/* eslint-disable react/prop-types */
import "../Header/Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/AvatarPicture.png";
function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button
        onClick={handleAddClick}
        // el onClick actua como un eventListenner sobre los buttons, y en este caso destructuramos la funcion que viene del componente App
        type="button"
        className="header__add-clothes-btn"
      >
        + add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Franco Turco</p>
        <img src={avatar} alt="Avatar picture" className="header__avatar" />
      </div>
    </header>
  );
}
export default Header;
