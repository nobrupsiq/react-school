import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { ITask } from '../../App'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ data, removeTask, toggleTaskStatus }: Props) {
  function handleDelete() {
    removeTask(data.id)
  }

  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.isChecked
    ? styles['TaskParagraph-checked']
    : ''

  return (
    <div className={styles.taskContainer}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button>
        <Trash
          onClick={handleDelete}
          size={16}
          color='#808080' />
      </button>
    </div>
  )
}