//para las prop types tenemos que hacer npm instal prop-types en la consola
import PropTypes from "prop-types" //la dependencia que acabamos de instalar

//vamos a crear el componente GENERICO que se adaptará a los diferentes inputs (nombre, email, region, etc)

///PARA QUE ESTO FUNCIONE TIENE QUE SER PARAMETRIZABLE

//Le metemos las variables por props a la función

function InputGroupRadio({ labelText, name, id, value, paymentType, handleChange }) {

    const handleInput = (ev) => {
        handleChange(ev.target.value)
    }

    return (
        <div className="input-group-radio">
            <label className="label-radio" htmlFor={id}>
                {labelText}
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                checked={paymentType === id}
                onChange={handleInput}
            />
        </div>
    )
}


InputGroupRadio.propTypes = {

    labelText: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    paymentType: PropTypes.string,
    handleChange: PropTypes.func,

}

export default InputGroupRadio
