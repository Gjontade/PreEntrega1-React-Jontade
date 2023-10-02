import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <item Key = {prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;
