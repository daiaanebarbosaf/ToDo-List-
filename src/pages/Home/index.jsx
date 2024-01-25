import { Header } from "../../components/Header";
import { Task } from "../../components/Task";


import '../../styles/global.css';
import styles from'./Home.module.css';
import { useState } from "react";

const tasks = [
  {
    id: 2,
    description: 'Vamos que Vamos',
    publishedAt: new Date('2024-01-22 07:51:00')
  },
  
]

export function Home() {

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.wrapper}>
        {
          tasks.map(task => {
                  return (
                    <Task
                      key={task.id}
                      description={task.description}
                      publishedAt={task.publishedAt}
                    />
                  )
                })
              }
      </main>
    </div>
  )
}
