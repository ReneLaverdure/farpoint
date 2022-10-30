import {ButtonContainer} from './Button.style'
import Spinner from '../Spinner/Spinner'

export default function Button({children, buttonType, isLoading, ...otherProps}) {
     
  return (
    <ButtonContainer disabled={isLoading} {...otherProps}>
        {isLoading ? <Spinner/> : children}
    </ButtonContainer>
  )
}
