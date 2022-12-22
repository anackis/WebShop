import './button.style.scss';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}


const Button = ({children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button 
      
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{ isLoading ? <div className='spinner-container-btn'></div> : children}
    </button>
  )
};

export default Button;