// Fichero src/components/App.jsx
import { useState } from "react";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheck from "./InputGroupCheck";
import Button from "./Button";


const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (value) => {

    setRegion(value);//como es un SELECT 
  };

  const handlePaymentType = (value) => { //ya que es en el value donde ocurre el evento
    setPaymentType(value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };



  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText labelText="Escriba un nombre" inputName="name" inputId="name" inputPlaceholder="Juan" inputValue={name} handleUseState={handleName} />

          {/* email */}
          <InputGroupText labelText="Escriba un email" inputName="email" inputId="email" inputPlaceholder="juanpalomo@gmail.com" inputValue={email} handleUseState={handleEmail} />


          {/* region es un SELECT*/}
          <InputGroupSelect labelText="Indica tu región" inputName="region" inputId="region" inputValue={region} handleUseState={handleRegion} />


          {/* payment type es un RADIO */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio labelText="Tarjeta de crédito" name="paymentType" id="creditCard" value="creditCard" paymentType={paymentType} handleChange={handlePaymentType} />

          <InputGroupRadio labelText="Efectivo" name="paymentType" id="cash" value="cash" paymentType={paymentType} handleChange={handlePaymentType} />

          <InputGroupRadio labelText="Contra reembolso" name="paymentType" id="cashOnDelivery" value="cashOnDelivery" paymentType={paymentType} handleChange={handlePaymentType} />

          <InputGroupCheck legalTerms={legalTerms} handleLegalTerms={handleLegalTerms} />

        </div>

        <Preview name={name} email={email} region={region} legalTerms={legalTerms} paymentType={paymentType} />

        {/* send */}

        <Button classStyle="" textButton="Enviar" handleClick={handleForm} disabled={isValidForm() === false} type="submit" />


        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}

        <Button classStyle="reset" textButton="Limpiar el formulario" handleClick={handleResetButton} disabled={false} type="reset" />


      </form>
    </div>
  );
};

export default App;
