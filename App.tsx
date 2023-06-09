import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NativeBaseProvider, VStack } from 'native-base'

import { Home } from '@screens/Home'

import { THEME } from './src/theme'

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <NativeBaseProvider theme={THEME}>
        <VStack flex={1} bg="#fff">
          <Home />
        </VStack>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

export default App
