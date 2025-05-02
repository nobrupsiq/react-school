import styles from './Avatar.module.css'


export function Avatar({ hasBorder = true, src }) {
  return (
      <img 
        className={hasBorder ? styles.avatar_with_border : styles.avatar} 
        src={src} 
      />
  )
}