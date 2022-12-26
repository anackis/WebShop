

import { FC, ButtonHTMLAttributes } from 'react';
import './button.style.scss';

export enum BUTTON_TYPE_CLASSES {
  google = 'google-sign-in',
  inverted = 'inverted',
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES ;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button 
      className={`button-container ${BUTTON_TYPE_CLASSES}`} {...otherProps}>{ isLoading ? <div className='spinner-container-btn'></div> : children}
    </button>
  )
};

export default Button;