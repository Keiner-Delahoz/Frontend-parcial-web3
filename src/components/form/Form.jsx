import "../../styles/Form.css";

const Form = () => {
  return (
    <form autoComplete="off">
      <h3>Bienvenido</h3>

      <div className="input-group">

        <div className="input-container">
          <input type="text" name="name" placeholder="Nombre" />
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="input-container">
          <input type="email" name="email" placeholder="Email" />
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div className="input-container">
          <textarea type="text" name="descripcion" placeholder="Descripcion" />
          <i className="fa-solid fa-comment"></i>
        </div>
        <br/>
        <a href="#">Terminos y Condiciones</a>

        <input type="submit" name="send" className="buttom" value="Enviar"/>

      </div>
    </form>
  );
};

export default Form;
