import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  eamil: '',
  password: '',
}



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch(error) {}

  };



  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  console.log(formFields);
  return (
    <div className="sign-up-container">
    <h2> Already have an account? </h2>
      <span>Sign In with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email" 
          inputoptions = {{
            type: 'email', 
            value: email, 
            name: "email",
            onChange: handleChange, 
            required: true,
          }}
        />
        <FormInput 
          label="Password" 
          inputoptions = {{
            type: 'password', 
            value: password,
            name: "password", 
            onChange: handleChange,
            required: true ,
            autoComplete: "on",
          }}
        />
        <div className="buttons-container">
          <Button type="submit" >Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle} >Google sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;