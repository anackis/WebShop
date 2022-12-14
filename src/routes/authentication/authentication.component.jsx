// import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
 import './authentication.style.scss';

const Authentication = () => {

  // const logGoogleUser = async () => {
  //   const {user} = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };
  return (
    <div className='authentication-container'>
      {/* <button onClick={logGoogleUser} >Sign in with Google popup!</button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication; 