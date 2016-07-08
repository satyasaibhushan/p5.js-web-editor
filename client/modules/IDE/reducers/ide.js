import * as ActionTypes from '../../../constants';

const initialState = {
  isPlaying: false,
  selectedFile: '1'
};

const ide = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SKETCH:
      return {
        isPlaying: !state.isPlaying
      };
    case ActionTypes.START_SKETCH:
      return {
        isPlaying: true
      };
    case ActionTypes.STOP_SKETCH:
      return {
        isPlaying: false
      };
    case ActionTypes.SET_SELECTED_FILE:
    case ActionTypes.SET_PROJECT:
    case ActionTypes.NEW_PROJECT:
      return Object.assign({}, state, { selectedFile: action.selectedFile });
    default:
      return state;
  }
};

export default ide;