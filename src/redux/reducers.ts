import { INCREMENT, DECREMENT } from './actions';

interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};


const counterReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
