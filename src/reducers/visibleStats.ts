import {TOGGLE_STATS} from '../actions/Settings';

const visibleStats = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_STATS:
      return !state;
    default:
      return state
  }
}

export default visibleStats;
