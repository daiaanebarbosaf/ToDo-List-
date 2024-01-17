import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import '../../styles/global.css';
import styles from'./Home.module.css';

export function Home() {

  return (
    <>
      <Header/>
    
      <form className={styles.taskForm}>
        <textarea 
          placeholder="Adicione uma nova tarefa"
        >
        </textarea>

        <button type="sumit">
          Criar
        </button>
      </form>
    </>
  )
}
