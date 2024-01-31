

function InputGroupCheck({ legalTerms, handleLegalTerms }) {

    return (

        <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
                Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
                type="checkbox"
                name="legalTerms"
                id="legalTerms"
                checked={legalTerms}
                onChange={handleLegalTerms}
            />
        </div>
    )
}

export default InputGroupCheck
