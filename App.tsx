import 'dayjs/locale/pt-br'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NativeBaseProvider, VStack } from 'native-base'
import { Provider } from 'react-redux'

import { Home } from '@screens/Home'

import { THEME } from './src/theme'
import store from './src/store'

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <NativeBaseProvider theme={THEME}>
        <Provider store={store}>
          <VStack flex={1} bg="#fff">
            <Home />
          </VStack>
        </Provider>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

export default App
