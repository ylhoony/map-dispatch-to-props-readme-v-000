import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// export default connect(mapStateToProps)(App);

// const mapDispatchToProps = () => {
//   return {
//     addItem: addItem
//   };
// };

const mapDispatchToProps = (dispatch) => {
  /* code change */
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
