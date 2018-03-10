import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import CounterActions from '../Redux/CounterRedux'
// Styles
import styles from './Styles/CounterScreenStyle'
import Counter from '../Components/Counter.js';

class CounterScreen extends Component {
  render () {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior='position'>
          <Counter
            value={this.props.value}
            increment={this.props.increment}
            decrement={this.props.decrement}
            reset={this.props.reset}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      value: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(CounterActions.increment()),
  decrement: () => dispatch(CounterActions.decrement()),
  reset: () => dispatch(CounterActions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen)
