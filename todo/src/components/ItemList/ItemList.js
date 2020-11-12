import Item from '../Item/Item';

const ItemList = ( {toDoItem} ) => (<ul>
  <li><Item toDoItem={toDoItem} /></li>
  <li><Item toDoItem={'Прописать props-ы'} /></li>
  <li><Item toDoItem={'Сделать все дела'} /></li>
</ul>);

export default ItemList;