import dayjs from 'dayjs'
import { Center, HStack, Text, VStack } from 'native-base'
import { useSelector } from 'react-redux'

import { useSearch } from '@store/slices/activeSearch'

import { MapInput } from './MapInput'
import { useLocation } from '@store/slices/location'

export function Header() {
  const { activeSearch } = useSelector(useSearch)
  const { location } = useSelector(useLocation)

  return (
    <VStack w="full" alignItems="center" mt={4}>
      <MapInput />

      <Center opacity={activeSearch ? 0.1 : 1}>
        <HStack>
          <Text
            fontSize="md"
            fontFamily="heading"
            color="title"
            numberOfLines={1}
          >
            {location?.name},{' '}
          </Text>
          <Text fontSize="md">{location?.region || location?.country}</Text>
        </HStack>

        <Text fontSize="xs" color="subtitle" numberOfLines={1}>
          Hoje, {dayjs(location.localtime).format('DD/MM')}
        </Text>
      </Center>
    </VStack>
  )
}
