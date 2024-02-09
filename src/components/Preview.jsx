//para las prop types tenemos que hacer npm instal prop-types en la consola
import PropTypes from "prop-types" //la dependencia que acabamos de instalar

function Preview({ name, email, region, legalTerms, paymentType }) {

    // Funciones que nos ayudan a renderizar
    const renderPaymentTypeText = () => {
        if (paymentType === "creditCard") {
            return "Tarjeta de crédito";
        } else if (paymentType === "cash") {
            return "Efectivo";
        } else if (paymentType === "cashOnDelivery") {
            return "Contra reembolso";
        }
    };

    return (
        <div className="preview">
            <h2>Tus datos son:</h2>
            <ul>
                <li>Nombre: {name}</li>
                <li>Email: {email}</li>
                <li>Región: {region}</li>
                <li>Método de pago: {renderPaymentTypeText()}</li>
                <li>
                    Has aceptado nuestros términos legales:{" "}
                    {legalTerms === true ? "Sí" : "No"}
                </li>
            </ul>
        </div>
    )
}

//definimos el objeto de las propTypes con key-value (key representa a la prop y value representa el tipo de prop)

Preview.propTypes = {

    name: PropTypes.string,
    email: PropTypes.string,
    region: PropTypes.string,
    legalTerms: PropTypes.bool,
    paymentType: PropTypes.string

}

export default Preview
