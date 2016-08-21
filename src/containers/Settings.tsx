import * as React from 'react';
import {connect} from 'react-redux';
import {toggleStats} from '../actions/Settings';

interface IProps{
  visibleStats: boolean;
  onChange: any;
}

const SimpleSettings = ({visibleStats, onChange} : IProps) => {
  return(
    <div>
    <label>
      <input type="checkbox"
      checked={visibleStats}
      onChange={() => { onChange()}}/>
      Show statistic{'\t'}
    </label>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    visibleStats: state.visibleStats
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onChange: () => {dispatch(toggleStats())}
  }
}

export const Settings = connect(mapStateToProps, mapDispatchToProps)(SimpleSettings);
