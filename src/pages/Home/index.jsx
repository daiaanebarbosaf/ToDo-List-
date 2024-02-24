import '../../styles/global.css';
import styles from'./Home.module.css';
import { useState } from "react";

import clipBoard from '../../assets/clipboard.svg';

import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';
import { Form } from '../../components/Form';


export function Home() {
  const [tasks, setTasks] = useState([]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isCompleted) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  console.log(checkedTasksCounter)

  function addTask(text){
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];
  
   setTasks(newTasks);
  }

  function deleteTask(id){
    
   const newTasks = [...tasks];
   const filteredTasks = newTasks.filter((task) =>
    task.id !== id ? task : null
   );

   setTasks(filteredTasks);
  }

  function completeTask(id){
    const newTasks = [...tasks];
      newTasks.map((task) => 
        task.id === id ? (task.isCompleted = !task.isCompleted) : task
      );
        
    setTasks(newTasks);
    
  }
  

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.wrapper}>
        <Form 
          addTask={addTask}
        />

        <div className={styles.sectionTasks}>
            <div className={styles.statusTasks}>
              <div className={styles.task}>
                <p className={styles.pTasksCreated}>Tarefas criadas</p>
                <span>{tasks.length}</span>
              </div>

              <div className={styles.task}>
                <p className={styles.pCompletedTasks}>Concluídas</p>
                <span>{checkedTasksCounter} de {tasks.length}</span>
              </div>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.listTasks}>
          {
            tasks.length === 0 ? 
                    <div className={styles.sectionEmpty}>
                    <img src={clipBoard} alt="Icone de uma prancheta" />
                    <p>Você ainda não tem tarefas cadastradas </p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
            : ""
          }
          
          {

            tasks.map((task) =>(
              <Todo
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}
