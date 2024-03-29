import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState, clicksCount } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };

    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <h3>Número de clicks: { clicksCount }</h3>
        <button onClick={() => dispatchAll()}>Incrementa 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count, 
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);
