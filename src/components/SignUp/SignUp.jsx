import {useState, useEffect} from 'react'
import './SignUp.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function SignUp() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
          alert('passwords do not match');
          return;
        }
    
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserDocumentFromAuth(user, { username });
          resetFormFields();
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    useEffect(() => {
        console.log(formFields)
    }, [formFields])

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <FormInput type="text" label="Username" name="username" value={username} onChange={handleChange}/>
            <FormInput type="email" label="email" name="email" value={email} onChange={handleChange}/>
            <FormInput type="password" label="password" name="password" value={password} onChange={handleChange}/>
            <FormInput type="password" label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
            <Button type="submit">Sign Up</Button>
        </form>
    </div>
  )
}
