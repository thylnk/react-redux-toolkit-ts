import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../features/customer/customerSlice';
import reservationReducer from '../features/reservation/reservationSlice';

const rootReducer = {
	reservation: reservationReducer,
	customer: customerReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
