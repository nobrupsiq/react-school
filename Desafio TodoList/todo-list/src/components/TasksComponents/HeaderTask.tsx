import styles from './HeaderTask.module.css'

interface Props {
  taskCounter: number
  checkedTaskCounter: number
}

export function HeaderTask({ taskCounter, checkedTaskCounter }: Props) {
  return (
    <header className={styles.taskHeaderContainer}>
      <aside>
        Tarefas criadas
        <span>{taskCounter}</span>
      </aside>

      <aside>
        Concluídas
        <span>{taskCounter == 0
          ? taskCounter
          : `${checkedTaskCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  )
}