//para las prop types tenemos que hacer npm instal prop-types en la consola
import PropTypes from "prop-types" //la dependencia que acabamos de instalar

//vamos a crear el componente GENERICO que se adaptará a los diferentes inputs (nombre, email, region, etc)

///PARA QUE ESTO FUNCIONE TIENE QUE SER PARAMETRIZABLE

//Le metemos las variables por props a la función

function InputGroupSelect({ labelText, inputName, inputId, region, handleUseState }) {

    const handleInputSelect = (ev) => {

        handleUseState(ev.target.value)
    }

    return (
        <div className="input-group-select">
            <label className="label-text" htmlFor="region">
                {labelText}
            </label>
            <select
                className="input-select"
                name={inputName}
                id={inputId}
                value={region}
                onChange={handleInputSelect}
            >
                <option>España peninsular</option>
                <option>Islas Canarias</option>
                <option>Islas Baleares</option>
                <option>Ceuta</option>
                <option>Melilla</option>
            </select>
        </div>
    )
}

InputGroupSelect.propTypes = {

    labelText: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string,
    region: PropTypes.string,
    handleUseState: PropTypes.func

}

export default InputGroupSelect
