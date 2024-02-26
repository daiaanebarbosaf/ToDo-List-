import styles from'./Form.module.css';

import { Input } from '../Input';

import { TbCirclePlus } from "react-icons/tb";

import { FormEvent, useState } from "react";

interface TaskProps {
    addTask: (text: string) => void;
}

export function Form({addTask}: TaskProps){

    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewTask(event: FormEvent){
        
        event.preventDefault();
        
        if(!newTaskText) return;

        addTask(newTaskText);
        setNewTaskText('');
    }

    return(
        <div className={styles.form}>
            <form 
                onSubmit={handleCreateNewTask}
                className={styles.taskForm}
            >
            <Input 
                name="task"
                value={newTaskText}
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setNewTaskText(e.target.value)}
                required
            />
            <button 
                onClick={handleCreateNewTask}
            >
                Criar
                <TbCirclePlus />
            </button>
            </form>
        </div>
    )
}