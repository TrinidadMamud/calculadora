import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Result extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text style={styles.result}>{this.props.result}</Text>
      )
  }
}

const styles = StyleSheet.create({
  result: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#80cbc4',
    fontSize: 26,
    textAlign: 'right',
    color: '#424242',
  },
});
