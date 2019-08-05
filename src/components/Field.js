import React from 'react';

class Field extends React.Component {
  handleChange = (event) => {
    this.props.onChange(event);
  }

  renderInput = () => {
    switch(this.props.type) {
      case 'text':
      default:
        return this.renderTextInput();
      case 'select':
        return this.renderSelect();
      case 'textarea':
        return this.renderTextArea();
    }
  }

  renderTextInput = () => {
    const fieldClasses = `${this.props.required ? 'required ' : ''}${this.props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input name={this.props.name}
               type={this.props.type}
               placeholder={this.props.placeholder}
               value={this.props.value}
               onChange={this.handleChange} />
      </div>
    );
  }

  renderSelect = () => {
    const fieldClasses = `${this.props.required ? 'required ' : ''}${this.props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
      <label htmlFor={this.props.name}>{this.props.label}</label>
        <select name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.handleChange}>
          {this.props.children}
        </select>
      </div>
    );
  }

  renderTextArea = () => {
    const fieldClasses = `${this.props.required ? 'required ' : ''}${this.props.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <textarea name={this.props.name}
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  onChange={this.handleChange}></textarea>
      </div>
    );
  }

  render() {
    if (this.props.hidden) {
      return null;
    }

    return this.renderInput();
  }
}

export default Field;
