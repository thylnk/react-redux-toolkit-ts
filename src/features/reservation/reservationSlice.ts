import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getValue } from '@testing-library/user-event/dist/utils';

export interface ReservationState {
	value: string[];
}

const initialState: ReservationState = {
	value: [],
};

export const reservationSlice = createSlice({
	name: 'reservation',
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<string>) => {
			state.value = [...state.value, action.payload];
		},
		removeReservation: (state, action: PayloadAction<number>) => {
			state.value.splice(action.payload, 1);
		},
	},
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
