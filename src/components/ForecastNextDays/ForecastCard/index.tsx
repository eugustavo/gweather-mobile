import dayjs from 'dayjs'
import { Center, HStack, Image, Text, VStack } from 'native-base'

interface ForecastCardProps {
  forecast: {
    date: string
    day: {
      maxtemp_c: number
      mintemp_c: number
      condition: {
        icon: string
      }
    }
  }
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <HStack
      py={2}
      px={4}
      mb={2}
      w="100%"
      rounded="md"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor="gray.200"
    >
      <VStack>
        <Text fontSize="xs" color="subtitle" textTransform="capitalize">
          {dayjs(forecast.date).locale('pt-br').format('dddd,')}
        </Text>
        <Text fontSize="xs" color="subtitle">
          {dayjs(forecast.date).format('DD/MM')}
        </Text>
      </VStack>

      <VStack flex={1} alignItems="flex-end">
        <Center>
          <Image
            w={12}
            h={12}
            source={{ uri: `https:${forecast.day.condition.icon}` }}
            alt="Condição do tempo"
            mb={-4}
          />

          <HStack mt={4} space={6}>
            <VStack alignItems="center" justifyContent="center">
              <Text fontSize="xs" color="subtitle">
                min
              </Text>
              <Text fontSize="lg" color="title" fontFamily="heading">
                {forecast.day.mintemp_c}°
              </Text>
            </VStack>

            <VStack alignItems="center" justifyContent="center">
              <Text fontSize="xs" color="subtitle">
                max
              </Text>
              <Text fontSize="lg" color="title" fontFamily="heading">
                {forecast.day.maxtemp_c}°
              </Text>
            </VStack>
          </HStack>
        </Center>
      </VStack>
    </HStack>
  )
}
