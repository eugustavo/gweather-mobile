import React from 'react'
import { Box, NativeBaseProvider, Text } from 'native-base'
import { SafeAreaView, StatusBar } from 'react-native'
import { THEME } from './src/theme'

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <NativeBaseProvider theme={THEME}>
        <Box flex={1} bg="white" alignItems="center" justifyContent="center">
          <Text color="subtitle">
            Open up App.tsx to start working on your app!
          </Text>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

export default App
