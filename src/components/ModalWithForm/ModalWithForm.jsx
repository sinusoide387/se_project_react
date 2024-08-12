/* eslint-disable react/prop-types */
import "../ModalWithForm/ModalWithForm.css";

// eslint-disable-next-line react/prop-types
function ModalWithForm({
  children,
  buttonText,
  titleText,
  activeModal,
  closeModal,
}) {
  /*el primero(children) es un prop que pasa los elementos que esten adentro de donde se llamo al componente, solo debo poner el children donde quiero que vaya (en este caso dentro de la form)*/
  /*el segundo y el tercero (buttonText y titleText) son los valores que se van a cambiar de forma dinamica y el valor se le da cuando llamo al componente (en este caso dentro del App component)*/
  return (
    <div
      className={`modal ${
        activeModal === "add-garment" ? "modal__opened" : ""
      }`}
    >
      {/* dentro del modal usamos destructure para obtener el activeModal value, si el activeModal es igual al string "add-garment" entonces es True y agrega la clase "modal__opened" y se hace visible el modal, de lo contrario aparece un empty string. */}
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={closeModal}
        ></button>
        <form className="modal__form">{children}</form>
        <div className="button__container">
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
