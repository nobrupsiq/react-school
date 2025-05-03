import styles from './Form.module.css'
import { PlusCircle, TextBolder } from "phosphor-react";

export function Form() {
  return (
    <>
      <form className={styles.form}>
        <input placeholder='Adicione uma nova tarefa' type="text" />
        <button>Criar <PlusCircle size={16}/></button>
      </form>
    </>
  )
}