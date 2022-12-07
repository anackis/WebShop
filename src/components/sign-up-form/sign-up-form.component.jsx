import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: '',
  eamil: '',
  password: '',
  confirmPassword: ''
}



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !==  confirmPassword) {
      alert("your password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
      
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log("error", error);
      }
      
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  console.log(formFields);
  return (
    <div className="sign-up-container">
    <h2> Dont't have an account? </h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name" 
          inputoptions = {{
            type: 'text',
            value: displayName, 
            name: "displayName", 
            onChange: handleChange, 
            required: true,
          }}
        />
        {/* <FormInput 
          label="Display Name" 
          type='text' 
          value={displayName} 
          name="displayName" 
          onChange={handleChange} 
          required 
        /> */}
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
        <FormInput 
          label="Confirm Password" 
          inputoptions = {{
            type: 'password', 
            value: confirmPassword,
            name: "confirmPassword", 
            onChange: handleChange, 
            required: true ,
            autoComplete: "on", 
          }}
          
        />
        <Button type="submit" >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;