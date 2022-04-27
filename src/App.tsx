import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { Customer } from './features/customer/customerSlice';
import { addReservation } from './features/reservation/reservationSlice';

function App() {
	const dispatch = useDispatch();
	const [reservationNameInput, setReservationNameInput] = useState('');

	const reservation = useSelector(
		(state: RootState) => state.reservation.value
	);

	const customers = useSelector((state: RootState) => state.customer.value);

	const handleAddReservations = (e: React.MouseEvent) => {
		e.preventDefault();
		if (reservationNameInput !== '') {
			dispatch(addReservation(reservationNameInput));
			setReservationNameInput('');
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="reservation-container">
					<div>
						<h5 className="reservation-header">Reservations</h5>
						<div className="reservation-cards-container">
							{reservation.map((name: string, index: number) => {
								return (
									<ReservationCard key={index} name={name} index={index} />
								);
							})}
						</div>
					</div>
					<div className="reservation-input-container">
						<form>
							<input
								value={reservationNameInput}
								onChange={(e) => {
									e.preventDefault();
									setReservationNameInput(e.target.value);
								}}
							/>
							<button onClick={(e) => handleAddReservations(e)} type="submit">
								Add
							</button>
						</form>
					</div>
				</div>
				<div className="customer-food-container">
					{customers.map((customer: Customer) => {
						return (
							<CustomerCard
								id={customer.id}
								name={customer.name}
								food={customer.food}
								key={customer.id}
							/>
						);
					})}
					{/* <CustomerCard
						id={'1'}
						name={'Khanh Thy'}
						food={['Hambuger', 'Sandwitch']}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default App;
