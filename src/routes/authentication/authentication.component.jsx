// import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
 

const Authentication = () => {

  // const logGoogleUser = async () => {
  //   const {user} = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };
  return (
    <div>
      <h1>Sign-In Page</h1>
      {/* <button onClick={logGoogleUser} >Sign in with Google popup!</button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication; 