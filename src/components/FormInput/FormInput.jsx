import {FormInputContainer, FormInputLabel, FormInputStyle} from './FormInput.style'

export default function FormInput({label, ...otherProps}) {

  return (
    <FormInputContainer>
        <FormInputLabel htmlFor="">{label}</FormInputLabel>
        <FormInputStyle {...otherProps} />
    </FormInputContainer>
  )
}
