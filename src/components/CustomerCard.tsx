import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../features/customer/customerSlice';

interface CustomerCardType {
	id: string;
	name: string;
	food: string[];
}

function CustomerCard({ id, name, food }: CustomerCardType) {
	const dispatch = useDispatch();
	const [customerFoodInput, setCustomerFoodInput] = useState('');

	return (
		<div className="customer-food-card-container">
			<h5>{name}</h5>
			<div className="customer-foods-container">
				<div className="customer-food">
					{food.map((food) => {
						return <p key={food}>{food}</p>;
					})}
				</div>
				<div className="customer-food-input-container">
					<input
						value={customerFoodInput}
						onChange={(e) => setCustomerFoodInput(e.target.value)}
					/>
					<button
						onClick={() => {
							dispatch(addFood({ id: id, name: customerFoodInput }));
						}}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default CustomerCard;
