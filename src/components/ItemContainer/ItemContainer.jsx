import "./ItemContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemContainer = () => {
	const [product, setProduct] = useState(null)
	const { itemId } = useParams()

	useEffect(() => {
		getProductById(itemId)
			.then(response => {
				setProduct(response);
			})
			.catch(error => {
				console.error(error);
			});
	}, [itemId]);
	return (
		<div className="ItemContainer">
			<Item {...product} />
		</div>
	);
};

export default ItemContainer;
