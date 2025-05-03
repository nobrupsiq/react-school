import './global.css'
import styles from "./App.module.css";

import Logo from './assets/Logo.svg'
import { Form } from './components/Form'

function App() {

  return (
    <>
      <header>
          <img src={Logo} />
      </header>
      
      <div className={styles.wrapper}>
        <main>
          <Form />
        </main>
      </div>
    </>
  )
}

export default App
