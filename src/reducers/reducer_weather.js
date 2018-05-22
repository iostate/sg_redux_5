import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER: 
			// never PUSH the payload to the state, as that is mutating the current state
			// You always want to return a fresh new state
			// state.push(action.payload.data);
			// only returning payload.data, where actual city forecast is being held
			// return state.concat([ action.payload.data ]); 
			return [ action.payload.data, ...state]; // this will push the data to the beginning of state
	}
	return state;
}