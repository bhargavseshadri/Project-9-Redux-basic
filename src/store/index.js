//REDUX WITH TOOLKIT


import { createSlice,configureStore } from '@reduxjs/toolkit';   //REDUX TOOLKIT STEP = 1(Importing useSlice function)  //REDUX TOOLKIT STEP = 5 (importing configureStore)
import authReducer from './authSlice';

const initialCounterState = { counter: 0,showCounter: true };

const counterSlice = createSlice({                   //REDUX TOOLKIT STEP = 2 using that useSlice
                          name: 'counter',              
                          initialState: initialCounterState,     //REDUX TOOLKIT STEP = 3(giving it a state)
                          reducers: {                      //REDUX TOOLKIT STEP = 4 (in this we give the methods based on our requirement)
                            increment(state) {
                              state.counter++;
                            },
                            decrement(state) {
                              state.counter--;
                            },
                            increase(state,action) {
                              state.counter = state.counter + action.payload;
                            },
                            toggleCounter(state) {
                              state.showCounter = !state.showCounter;
                            }
                          }
})




const store = configureStore({      //REDUX TOOLKIT STEP = 6 (creating a store using configure store )
  reducer: {counter: counterSlice.reducer,    //REDUX TOOLKIT STEP = 7 (in this reducer object we give the different reducer we have as a properties)
             auth: authReducer
            }
});    

export const counterActions = counterSlice.actions;  //REDUX TOOLKIT STEP = 8 (exporting this object)

export default store;     


//for next steps go to counter.js

