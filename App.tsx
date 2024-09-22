import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
 
  return(
    <ToastProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ToastProvider>
  )

  // if (!true) {
  //   return (
  //     <AppNavigation />
  //   )
  // } else {
  //   return (
  //       <TabNavigation />
  //   )
  // }

}

export default App