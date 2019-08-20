import React from 'react';

const Field = props => {
  if (props.hidden) return null;

  const handleChange = (event) => {
    if (!props.readOnly) props.onChange(event);
  };

  const renderInput = () => {
    switch(props.type) {
      case 'text':
      default:
        return renderTextInput();
      case 'select':
        return renderSelect();
      case 'textarea':
        return renderTextArea();
    }
  };

  const renderTextInput = () => {
    const fieldClasses = `${props.required ? 'required ' : ''}${props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={props.name}>{props.label}</label>
        <input name={props.name}
               type={props.type}
               placeholder={props.placeholder}
               value={props.value}
               onChange={handleChange} />
      </div>
    );
  };

  const renderSelect = () => {
    const fieldClasses = `${props.required ? 'required ' : ''}${props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
      <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}>
          {props.children}
        </select>
      </div>
    );
  };

  const renderTextArea = () => {
    const fieldClasses = `${props.required ? 'required ' : ''}${props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={props.name}>{props.label}</label>
        <textarea name={props.name}
                  placeholder={props.placeholder}
                  value={props.value}
                  onChange={handleChange}></textarea>
      </div>
    );
  };

  return renderInput();
}

export default Field;
