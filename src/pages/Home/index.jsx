import { Header } from "../../components/Header";
import { TbCirclePlus } from "react-icons/tb";

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

        <button 
          type="sumit"
        >
          Criar
          <TbCirclePlus />
        </button>
      </form>
    </>
  )
}
