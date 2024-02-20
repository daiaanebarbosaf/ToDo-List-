import styles from'./Form.module.css';

import { Input } from '../../components/Input';

import { TbCirclePlus } from "react-icons/tb";

export function Form(){
    return(
        <div>
        <form 
          //onSubmit={handleCreateNewTask}
          className={styles.taskForm}
        >
          <Input 
              name="task"
              //value={newTaskText}
              placeholder="Adicione uma nova tarefa"
              //onChange={handleNewTaskChange}
              //onInvalid={handleNewTaskInvalid}
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