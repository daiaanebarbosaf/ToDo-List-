import styles from'./Form.module.css';

import { Input } from '../../components/Input';

import { TbCirclePlus } from "react-icons/tb";

import { useState } from "react";

export function Form({addTask}){

    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewTask (e){
        
        event.preventDefault();
        
        if(!newTaskText) return;

        addTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskInvalid(){
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    return(
        <div>
        <form 
            onSubmit={handleCreateNewTask}
            className={styles.taskForm}
        >
          <Input 
              name="task"
              value={newTaskText}
              placeholder="Adicione uma nova tarefa"
              onChange={(e) => setNewTaskText(e.target.value)}
              onInvalid={handleNewTaskInvalid}
              required
          />
          <button 
              type="sumit"
          >
              Criar
              <TbCirclePlus />
          </button>
        </form>
        </div>
    )
}