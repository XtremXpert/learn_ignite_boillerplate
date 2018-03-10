import { StackNavigator } from 'react-navigation'
import CounterScreen from '../Containers/CounterScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CounterScreen: { screen: CounterScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CounterScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
