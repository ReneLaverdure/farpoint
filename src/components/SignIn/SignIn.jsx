import {useState} from 'react'
import './SignIn.style.jsx';
import FormInput from '../FormInput/FormInput';

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import Button from '../Button/Button';

//redux
import { toggleAuth } from '../../store/features/utilSlice';
import { useAppDispatch } from '../../store/hooks';

//style
import {SignInContainer, SignInForm} from './SignIn.style'


const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useAppDispatch()
    
    const authChange = () => dispatch(toggleAuth())

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };



    const signInWithGoogle = async () => {
        const user = await signInWithGooglePopup();
        console.log(user)
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await signInAuthUserWithEmailAndPassword(email, password);
          resetFormFields();
        } catch (error) {
          console.log('user sign in failed', error);
        }
      };

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };

  return (
    <SignInContainer>
        <h2>Sign in</h2>
        <span>Sign in with your email and password</span>
        <SignInForm onSubmit={handleSubmit}>
          <FormInput 
            label="Email" 
            type="email" 
            required 
            onChange={handleChange} 
            name="email" 
            value={email} />

          <FormInput 
            label="Password" 
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password} />
            
          <Button type="submit">Login</Button>
          <Button onClick={authChange}>Sign Up</Button>
          <Button onClick={signInWithGoogle}> Sign in with Google</Button>
        </SignInForm>
        
    </SignInContainer>
  )
}
