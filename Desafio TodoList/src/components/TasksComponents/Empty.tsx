import styles from './Empty.module.css'
import clipboard from '../../../public/clipboard.png'

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} alt="Prancheta de tarefas" />

      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}