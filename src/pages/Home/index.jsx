import '../../styles/global.css';
import styles from'./Home.module.css';
import { useState } from "react";


import { Header } from '../../components/Header';
import { Todo } from '../../components/Todo';
import { Form } from '../../components/Form';


export function Home() {
  const [todos, setTodos] = useState([
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

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.wrapper}>
        <Form />

        <div className={styles.line}></div>

        <div className={styles.listTasks}>
          {
            todos.map((todo) =>(
              <Todo
                todo={todo}
              />
            ))
          }
        </div>

      </main>
      
      
    </div>
  )
}
