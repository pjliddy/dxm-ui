import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  const {
    buttonType,
    children,
    hidden,
    iconType,
    linkTo,
    onClick,
    tooltipPosition,
    tooltipText,
  } = props;

  if (hidden) return null;

  let buttonStyle = '';

  switch (buttonType) {
    case 'primary':
      buttonStyle = 'primary';
      break;
    case 'secondary':
    default:
      buttonStyle = 'secondary basic';
      break;
    case 'icon':
      buttonStyle = 'basic'
      break;
  }

  if (linkTo) {
    // don't duplicate icon & type, convert to portable
    return(
      <Link className={`ui ${buttonStyle} button`}
            data-tooltip={tooltipText}
            data-position={tooltipPosition}
            to={linkTo}>
        {iconType && <i className={`${iconType} icon`}></i>}
        {buttonType !== 'icon' ? children : ''}
      </Link>
    )
  }

  return (
    <button className={`ui ${buttonStyle} button`}
            data-tooltip={tooltipText}
            data-position={tooltipPosition}
            onClick={onClick}>
      {iconType && <i className={`${iconType} icon`}></i>}
      {buttonType !== 'icon' ? children : ''}
    </button>
  )
}

export default Button;
