import React from 'react';

const Field = props => {
  const {
    disabled,
    hidden,
    inputType,
    label,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    value
  } = props;

  if (hidden) return null;

  const handleChange = (event) => {
    if (!readOnly) onChange(event);
  };

  const renderInput = () => {
    switch(inputType) {
      case 'text':
      default:
        return renderTextInput();
      case 'select':
        return renderSelect();
      case 'textarea':
        return renderTextArea();
    }
  };

  const fieldClasses = `${required ? 'required ' : ''}${disabled ? 'disabled ' : ''}field`;

  const renderTextInput = () => {

    return(
      <div className={fieldClasses}>
        <label htmlFor={name}>{label}</label>
        <input name={name}
               type={props.inputType}
               placeholder={placeholder}
               value={value}
               onChange={handleChange} />
      </div>
    );
  };

  const renderSelect = () => {
    return(
      <div className={fieldClasses}>
      <label htmlFor={name}>{label}</label>
        <select name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}>
          {props.children}
        </select>
      </div>
    );
  };

  const renderTextArea = () => {
    return(
      <div className={fieldClasses}>
        <label htmlFor={name}>{label}</label>
        <textarea name={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleChange}></textarea>
      </div>
    );
  };

  return renderInput();
}

export default Field;
