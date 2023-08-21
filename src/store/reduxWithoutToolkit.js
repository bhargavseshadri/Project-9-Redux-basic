import { createStore } from 'redux';

const initialState = { 
                       counter: 0,
                       showCounter: true 
                      };

const counterReducer = (state = initialState, action) => {   //REDUX STEP = 2(creating reducer to update the STATE in the store)
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'increase') {
    return{                           //so we can use this function based on the amount value we give
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'toggle') {
    return {
      showCounter : !state.showCounter,
      counter:state.counter,  // here we are keeping tghe existing counter state when this function runs
    }
  }

  return state;     //it just get renders when both the above condition fails.
};

const store = createStore(counterReducer);    //REDUX STEP = 1 (creation of STORE)

export default store;     //REDUX STEP = 3 (exporting the STORE)

//For Next STEP go to main INDEX.JS(root)