import s from './Button.module.scss'

interface ButtonProps {
  children: any
  onClick: React.ReactEventHandler
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={s.btn}
      {...props}
    >
      {children}
    </button>
  )
}
