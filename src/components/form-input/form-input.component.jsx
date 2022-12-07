import './form-input.style.scss';


const FormInput = ({ label, ...inputoptions }) => {
// const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputoptions} />
      {label && (
        <label
          className={`${
            inputoptions.value ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;