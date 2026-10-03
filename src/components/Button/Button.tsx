import React from 'react'
import style from './Button.module.css'
import { linkWhatsapp } from '../../utils/whatsapp'

type BaseButtonProps = {
  variant: 'gold' | 'black'
  icon?: React.ReactNode
  buttonSize: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type WhatsappButtonProps = {
  whatsappButton: true,
  phone: string,
  message: string
}

type NormalButtonProps = {
  whatsappButton?: false
  phone?: never
  message?: never
}

type buttonProps = BaseButtonProps & (WhatsappButtonProps | NormalButtonProps) & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, variant, icon, buttonSize, whatsappButton, phone, message, ...props }: buttonProps) => {
  const handleClick = () => {
    if(whatsappButton) {
      const url = linkWhatsapp({
        phone,
        message
      })
      window.open(url, "_blank")
    }
  }
  return (
    <button className={`${style.button} ${style[variant]} ${style[buttonSize]}`} onClick={whatsappButton ? handleClick : props.onClick}>
      {icon && <span className={style.icon}>{icon}</span>}
      {children}
    </button>
  )
}

export default Button