import Item from '../Item/Item';

const ItemList = ({ items }) => (<ul>
  {items.map(item => <li key={item.value}>

  </li>)}
</ul>);

export default ItemList;