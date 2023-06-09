import dayjs from 'dayjs'
import { Center, HStack, Text, VStack } from 'native-base'

import { MapInput } from './MapInput'

export function Header() {
  function formatDate(date: Date) {
    const dateFormatted = dayjs(date).format('DD/MM')

    return dateFormatted
  }

  return (
    <VStack w="full" alignItems="center">
      <MapInput />

      <Center opacity={1}>
        <HStack>
          <Text fontSize="md" fontFamily="heading" color="title">
            Palmas,
          </Text>
          <Text fontSize="md">Tocantins</Text>
        </HStack>

        <Text fontSize="xs" color="subtitle">
          Hoje, {formatDate(new Date())}
        </Text>
      </Center>
    </VStack>
  )
}
