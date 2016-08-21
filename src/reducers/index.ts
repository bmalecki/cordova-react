import { combineReducers } from 'redux'
import secondElapsed from './secondElapsed'
import visibleStats from './visibleStats'


export default combineReducers({
  secondElapsed,
  visibleStats
});
