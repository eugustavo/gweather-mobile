import { useSelector } from 'react-redux'
import { Image, Text, VStack } from 'native-base'

import { useLocation } from '@store/slices/location'

export function CurrentWeather() {
  const { current } = useSelector(useLocation)

  return (
    <VStack mt={12} alignItems="center" justifyContent="center">
      <Image
        w={12}
        h={12}
        source={{ uri: `https:${current.condition.icon}` }}
        alt="Condição do tempo"
        mb={-4}
      />

      <Text fontSize="96px" color="black" fontFamily="heading">
        {current.temp_c}°
      </Text>
    </VStack>
  )
}
