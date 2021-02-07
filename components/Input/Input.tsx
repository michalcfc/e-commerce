import React from "react"
import { InputStyle } from "./Input.styles"
import { InputProps } from "./Input.d"

const Input: React.FC<InputProps> = ({
  placeholder,
  defaultValue,
  value,
  onChange,
  onBlur,
  onFocus,
  onSubmit,
  onKeyDown,
  onKeyPress,
  onKeyUp,
}) => (
  <>
    <InputStyle 
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
    />
  </>
)

export default Input;