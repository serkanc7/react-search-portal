import { useState } from "react";
import "./FormInput.scss";

function FormInput({
  label,
  errorMessage,
  onChange,
  id,
  value,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

 



  return (
    <div className="formInput">
      <label className="formInput__label">{label}</label>
      <input
        {...inputProps}
        className="formInput__input"
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span className="formInput__error">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
