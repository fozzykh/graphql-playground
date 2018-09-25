import { UPDATE_FOCUSED_ELEMENT } from '../actions/types';

export default (state = -1, action) => {
  switch(action.type) {
    case UPDATE_FOCUSED_ELEMENT:
      return action.focusedElementId;
    default:
      return state;
  }
}
