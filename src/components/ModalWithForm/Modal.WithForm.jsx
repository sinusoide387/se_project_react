function ModalWithForm() {
  <div className="modal">
    <form className="modal__form">
      <h2 className="modal__title">New garment</h2>
      <button type="button" className="modal__close">
        CLOSE
      </button>
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="link"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
        />
      </label>
      <fieldset className="modal__ratio-button"></fieldset>
    </form>
  </div>;
}

export default ModalWithForm;
