import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native'

import RoundedButton from '../Components/RoundedButton'
import styles from './Styles/CounterStyle'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  // // Prop type warnings
  static propTypes = {
      value: PropTypes.number.isRequired,
      increment: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.counter}>
        <RoundedButton
          text="Up"
          onPress={this.props.increment}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.value}
        </Text>
        <RoundedButton
          text="Down"
          onPress={this.props.decrement}/>
      </View>
    );
  }
}
