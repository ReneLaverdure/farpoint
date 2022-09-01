import {useState} from 'react'
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import Button from '../Button/Button';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

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
    <div>
        <h2>Sign in</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
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
        <Button onClick={signInWithGoogle}> Sign in with Google</Button>
        </form>
        
    </div>
  )
}
