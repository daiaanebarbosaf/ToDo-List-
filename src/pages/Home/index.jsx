import '../../styles/global.css';
import styles from'./Home.module.css';
import { useState } from "react";


import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';
import { Form } from '../../components/Form';


export function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:"Duolingo",
      isCompleted: false,
    },
    {
      id: 2,
      text:"Dançar",
      isCompleted: false,
    },
  ]);

  function addTask(text){
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];

    console.log(text)
  
   setTasks(newTasks);
  }

  function deleteTask(id){
    
   const newTasks = [...tasks];
   const filteredTasks = newTasks.filter((task) =>
    task.id !== id ? task : null
   );

   setTasks(filteredTasks);
  }

  function completeTask(id, isCompleted){
    const newTasks = [...tasks];
    newTasks.map((task) => task.id === id ? task.isCompleted = !isCompleted : task)
    
    setTasks(newTasks, isCompleted);
  }

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.wrapper}>
        <Form 
          addTask={addTask}
        />

        <div className={styles.line}></div>

        <div className={styles.listTasks}>
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
