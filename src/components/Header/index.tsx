import styles from'./Header.module.css';
import logoTodo from '../../assets/logoTodo.svg';

export function Header() {
    return (
        <header className={styles.header}>
          <img src={logoTodo} alt="Logotipo do To-do List" />
        </header>
      )
}

