import { Header } from "../../components/Header";
import { ItemTasks } from "../../components/ItemTasks";

import { TbCirclePlus } from "react-icons/tb";

import clipBoard from '../../assets/clipboard.svg';

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

        <section className={styles.sectionItemTasks}>
          <ItemTasks />
          <div className={styles.sectionEmpty}>
            <img src={clipBoard} alt="Icone de uma prancheta" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </main>
    </div>
  )
}
