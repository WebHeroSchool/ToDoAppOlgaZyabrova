import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const toDoItem = 'Написать новое приложение';

const App = () => {
  const items = [
  {
    value: 'Работа',
    isDone: true
  },
  {
    value: 'Чтение книги',
    isDone: false
  },
  {
    value: 'Уборка',
    isDone: true
  }
  ];
  return (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Список дел:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
}

export default App;