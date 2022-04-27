import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Customer {
	id: string;
	name: string;
	food: string[];
}

interface CustomerState {
	value: Customer[];
}

interface AddFood {
	id: string;
	name: string;
}

const initialState: CustomerState = {
	value: [],
};

export const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		addCustomer: (state, action: PayloadAction<Customer>) => {
			state.value = [...state.value, action.payload];
		},
		addFood: (state, action: PayloadAction<AddFood>) => {
			state.value.forEach((customer) => {
				if (customer.id === action.payload.id) {
					customer.food.push(action.payload.name);
				}
			});
		},
	},
});

export const { addCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
