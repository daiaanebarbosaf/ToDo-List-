import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ItemTasks } from "../../components/ItemTasks";

import { TbCirclePlus } from "react-icons/tb";

import clipBoard from '../../assets/clipboard.svg';

import '../../styles/global.css';
import styles from'./Home.module.css';
import { useState } from "react";


export function Task({ description, publishedAt }) {

  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      description: 'Duolingo + Lumosity',
      publishedAt: new Date("1995-12-17T03:24:00"),

    }
  ]);

  const [ newTaskText, setNewTaskText] = useState('');


  function handleCreateNewTask(){
    event.preventDefault();
    
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
    
  }  

  function handleNewTaskChange() {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }
  
  console.log(tasks);
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
          <form 
            onSubmit={handleCreateNewTask} 
            className={styles.taskForm}
          >
            <textarea 
              value={newTaskText}
              onChange={handleNewTaskChange}
              placeholder="Adicione uma nova tarefa"
              required
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
          {
              tasks.map(task => {
                return (
                  <ItemTasks 
                    description={task.description}
                    publishedAt={task.publishedAt}
                  />
                )
              })
            }
            
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
