import { useSelector } from 'react-redux'
import { Text, VStack } from 'native-base'

import { useLocation } from '@store/slices/location'

import { ForecastCard } from './ForecastCard'

export function ForecastNextDays() {
  const { forecast } = useSelector(useLocation)

  return (
    <VStack mt={8} alignItems="flex-start">
      <Text fontSize="md" color="title">
        Próximos dias
      </Text>

      {forecast.forecastday.map((item) => (
        <ForecastCard key={item.date} forecast={item} />
      ))}
    </VStack>
  )
}
