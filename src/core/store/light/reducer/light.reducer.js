import { lightInitalState } from './light.initial-state';

const lightReducer = (state = lightInitalState, action) =>  {
  switch (action.type) {
    default: 
      return state;
  }
}

export { lightReducer };