import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


const Item = ({id, name, img, price, stock, category, description}) => {

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className="Info precio">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    {category}
                </p>
                <p className="Info">
                    {description}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;