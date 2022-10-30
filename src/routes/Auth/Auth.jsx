
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import Circle from '../../components/Circle/Circle';

import {AuthFormContainer, AuthContentContainer} from './Auth.style'

//redux
import { useAppSelector } from '../../store/hooks';
import { getAuthState } from '../../store/features/utilSlice';

export default function Auth() {

  const authType = useAppSelector(getAuthState) 


  return (
    <AuthFormContainer>
        <AuthContentContainer>
          { authType ? 
              <SignIn /> :
              <SignUp />
          }
       </AuthContentContainer>
        <Circle top='-200' right="-200" width='900px' height='900px' />
    </AuthFormContainer>
  )
}
