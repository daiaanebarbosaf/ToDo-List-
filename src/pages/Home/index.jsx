import { Header } from "../../components/Header";
import { ItemTasks } from "../../components/ItemTasks";

import { TbCirclePlus } from "react-icons/tb";

import '../../styles/global.css';
import styles from'./Home.module.css';

export function Home() {

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.wrapper}>
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

          <section className={styles.sectionTasks}>
            <div className={styles.statusTasks}>
              <div className={styles.task}>
                <p className={styles.pTasksCreated}>Tarefas criadas</p>
                <span>5</span>
              </div>

              <div className={styles.task}>
                <p className={styles.pCompletedTasks}>Concluídas</p>
                <span>2 de 5</span>
              </div>
          </div>
        </section>
        <div className={styles.line}></div>

        <section>
          <ItemTasks />
        </section>
      </main>
    </div>
  )
}
