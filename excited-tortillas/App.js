import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import Visor from './components/Visor.js';
import Result from './components/Result.js';
import Numbers from './components/Numbers.js';

const math = require('mathjs');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {lastexpression: [], expression: '', result: ''}

    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
   this._deleteExpression = this._deleteExpression.bind(this);
  }

  _deleteExpression() {
    this.state.expression && this.setState((prevState) => ({
      expression: prevState.lastexpression.pop(),
      lastexpression: prevState.lastexpression
    }));
  }

  _assembleExpression(symbol) {
    this.setState((prevState) => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol
    }));
  }

  _calculateResult() {
    let result;
    try {
      result = math.eval(this.state.expression);
    } catch (e) {
      result = 'Error';
    }
    this.setState({result: result});
  }

  render() {
    return (
      <View style={styles.container}>
        <Visor expression={this.state.expression}/>
        <Result result={this.state.result}/>
        <Numbers
          assembleExpression={this._assembleExpression}
          calculateResult={this._calculateResult}
          deletePressed={this._deleteExpression}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
