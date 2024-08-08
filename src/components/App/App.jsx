import { useState } from "react";
import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" }); //el primer valor es un estado inicial,  el segundo cambia el valor del primero, y lo que va en el usestate es el default value
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weather={weatherData} />
        {/* pasamos nuestra const a Main para que lo use como prop, recordar poner el prop en la funcion Main(weather) */}
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
