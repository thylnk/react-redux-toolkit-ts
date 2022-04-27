import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customer/customerSlice';
import { removeReservation } from '../features/reservation/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardType {
	name: string;
	index: number;
}

function ReservationCard({ name, index }: ReservationCardType) {
	const dispatch = useDispatch();

	return (
		<div
			className="reservation-card-container"
			onClick={() => {
				dispatch(removeReservation(index));
				dispatch(addCustomer({ id: uuid(), name: name, food: [] }));
			}}>
			<p>{name}</p>
		</div>
	);
}

export default ReservationCard;
