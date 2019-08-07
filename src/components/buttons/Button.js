import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  buttonType = 'secondary',  // primary | secondary | icon
  children,
  iconType,
  linkTo,
  onClick,
  tooltipPosition,
  tooltipText,
}) => {

  let buttonStyle = '';

  switch (buttonType) {
    case 'primary':
      buttonStyle = 'ui primary button';
      break;
    case 'secondary':
    default:
      buttonStyle = 'ui secondary basic button';
      break;
    case 'icon':
      buttonStyle = 'ui basic button'
      break;
  }

  let icon = '';

  if (iconType) {
    const iconClass = `${iconType} icon`;
    icon = <i className={iconClass}></i>;
  }

  if (linkTo) {
    return(
      <Link className={buttonStyle}
            data-tooltip={tooltipText}
            data-position={tooltipPosition}
            to={linkTo}>
        {iconType && icon}
        {buttonType !== 'icon' ? children : ''}
      </Link>
    )
  }

  return (
    <button className={buttonStyle}
            data-tooltip={tooltipText}
            data-position={tooltipPosition}
            onClick={onClick}>
      {iconType && icon}
      {buttonType !== 'icon' ? children : ''}
    </button>
  )
}

export default Button;
