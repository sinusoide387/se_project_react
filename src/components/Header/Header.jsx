import "../Header/Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/AvatarPicture.png";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo}></img>
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-clothes-btn">+ add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Franco Turco</p>
        <img src={avatar} alt="Avatar picture" className="header__avatar" />
      </div>
    </header>
  );
}
export default Header;
