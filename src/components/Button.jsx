import PropTypes from "prop-types"

function Button({ classStyle, textButton, handleClick, disabled, type }) {
    return (
        <button className={`button ${classStyle}`} onClick={handleClick} disabled={disabled} type={type}>
            {textButton}
        </button>
    )
}

Button.propTypes = {

    classStyle: PropTypes.string,
    textButton: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string
}


export default Button
