import React from 'react';

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: props.disabled,
      hidden: props.hidden,
      label: props.label,
      name: props.name,
      placeholder: props.placeholder,
      onChange: props.onChange,
      readOnly: props.readOnly,
      required: false,
      type: props.type,
      value: props.value
    };

    this.children = props.children;
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.state.onChange(event);
  }

  componentDidUpdate() {
    if (this.props.value && !this.state.value) {
      this.setState({ value: this.props.value });
    }
  }

  renderInput = () => {
    switch(this.state.type) {
      case 'text':
      default:
        return this.renderTextInput();
        break;
      case 'select':
        return this.renderSelect();
      case 'textarea':
        return this.renderTextArea();
        break;
    }
  }

  renderTextInput = () => {
    const fieldClasses = `${this.state.required ? 'required ' : ''}${this.state.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={this.state.name}>{this.state.label}</label>
        <input name={this.state.name}
               type={this.state.type}
               placeholder={this.state.placeholder}
               value={this.state.value}
               onChange={this.handleChange} />
      </div>
    );
  }

  renderSelect = () => {
    const fieldClasses = `${this.state.required ? 'required ' : ''}${this.state.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
      <label htmlFor={this.state.name}>{this.state.label}</label>
        <select name={this.state.name}
                placeholder="content type"
                value={this.state.value}
                onChange={this.handleChange}>
          {this.children}
        </select>
      </div>
    );
  }

  renderTextArea = () => {
    const fieldClasses = `${this.state.required ? 'required ' : ''}${this.state.disabled ? 'disabled ' : ''}field`;

    return(
      <div className={fieldClasses}>
        <label htmlFor={this.state.name}>{this.state.label}</label>
        <textarea name={this.state.name}
                  placeholder={this.state.placeholder}
                  value={this.state.value}
                  onChange={this.handleChange}></textarea>
      </div>
    );
  }

  render() {
    return this.renderInput();
  }
}

export default Field;
