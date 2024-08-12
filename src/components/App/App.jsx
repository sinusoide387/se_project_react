import { useState } from "react";
import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" }); //el primer valor es un estado inicial,  el segundo cambia el valor del primero, y lo que va en el usestate es el default value
  const [activeModal, setActiveModal] = useState("");
  const handleAddClick = () => {
    setActiveModal("add-garment");
    {
      /*esta funcion pasa el valor que da True en el componente ModalWithForm y agrega la clase modal__opened.*/
    }
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        {/*pasamos el handleAddClick que posee la funcion que nos permite cambiar o variar el estado del valor default del activeModal, literalmente pasa el valor que va a dar True en el boolean en el modalwithform component*/}
        <Main weather={weatherData} />
        {/* pasamos nuestra const a Main para que lo use como prop, recordar poner el prop en la funcion Main(weather) */}
      </div>
      <ModalWithForm
        titleText="New garment"
        buttonText="Add garment"
        activeModal={
          activeModal
        } /*paso el estado inicial (activeModal con el default value de " ") y tambien la variacion de ese estado (setActiveModal)*/
        closeModal={handleCloseModal}
      >
        {/* defino los props que paso en el ModalWithForm component*/}
        <label htmlFor="name" className="modal__label-input">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label-input">
          Image{" "}
          <input
            type="link"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__fieldset">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input id="hot" type="radio" className="modal__radio_input" />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input id="warm" type="radio" className="modal__radio_input" />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input id="cold" type="radio" className="modal__radio_input" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
