//para las prop types tenemos que hacer npm instal prop-types en la consola
import PropTypes from "prop-types" //la dependencia que acabamos de instalar

//vamos a crear el componente GENERICO que se adaptará a los diferentes inputs (nombre, email, region, etc)

///PARA QUE ESTO FUNCIONE TIENE QUE SER PARAMETRIZABLE

//Le metemos las variables por props a la función

function InputGroupText({ labelText, inputName, inputId, inputPlaceholder, inputValue, handleUseState }) {

    //indicamos la función genérica


    return (
        <div className="input-group-text">
            <label className="label-text" htmlFor="name">
                {labelText}

            </label>
            <input
                className="input-text"
                type="text"
                name={inputName}
                id={inputId}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={handleUseState} //indicamos nombre de función GENÉRICA
            />
        </div>
    )
}

InputGroupText.propTypes = {

    labelText: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    inputValue: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    handleUseState: PropTypes.func,
    InputGroupSelect: PropTypes.string
}

export default InputGroupText
