import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { HeaderTask } from './components/TasksComponents/HeaderTask'

import { PlusCircle } from '@phosphor-icons/react'

import './global.css'
import styles from './App.module.css'
import { Task } from './components/TasksComponents/Task'
import { useState } from 'react'
import { Empty } from './components/TasksComponents/Empty'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [task, setTask] = useState<ITask[]>([])

  const checkedTaskCounter = task.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddedTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTask((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTask = task.filter((item) => item.id != id)

    setTask(filteredTask)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updateTasks = task.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: value }
      }

      return { ...item }
    })
    setTask(updateTasks)
  }

  return (
    <>
      <main>
        <Header />

        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button onClick={handleAddedTask}>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
          </div>

          <div>
            <HeaderTask
              taskCounter={task.length}
              checkedTaskCounter={checkedTaskCounter}
            />
          </div>

          {task.length > 0 ?
            <div>
              {task.map((item) => (
                <Task
                  key={item.id}
                  data={item}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
            : <Empty />}

        </section>
      </main>
    </>
  )
}

export default App
