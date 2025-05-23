import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...props }: Props) {
  return (
    <button
      className={styles.ButtonAddTask} {...props}>
      {children}
    </button>
  )
}