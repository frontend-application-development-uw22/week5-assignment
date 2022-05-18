import PropTypes from 'prop-types';

const Button = ({ text, onClick, classBtn }) => {
  return (
    <button
      onClick={onClick}
      className={classBtn}
      variant="primary"
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classBtn: PropTypes.string.isRequired
}

export default Button