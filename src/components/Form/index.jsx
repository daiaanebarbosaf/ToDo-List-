import styles from'./Form.module.css';

import { Input } from '../../components/Input';

import { TbCirclePlus } from "react-icons/tb";

import { useState } from "react";

export function Form({onAddTask, ...rest}){
    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewTask(){
        
        event.preventDefault();

        onAddTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
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
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
          />
          <button
              //onClick={handleCountingNewTask} 
              type="sumit"
          >
              Criar
              <TbCirclePlus />
          </button>
        </form>
        </div>
    )
}