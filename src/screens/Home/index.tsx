import { useEffect } from 'react'
import { VStack, ScrollView, useToast } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '@components/Header'
import { CurrentWeather } from '@components/CurrentWeather'
import { WeatherWidget } from '@components/WeatherWidget'
import { ForecastNextDays } from '@components/ForecastNextDays'

import { useSearch } from '@store/slices/activeSearch'
import { addPosition, usePosition } from '@store/slices/position'
import { setLocation } from '@store/slices/location'

import { api } from '@services/api'
import Geolocation from '@react-native-community/geolocation'

export function Home() {
  const { activeSearch } = useSelector(useSearch)
  const { position } = useSelector(usePosition)

  const toast = useToast()
  const dispatch = useDispatch()

  useEffect(() => {
    async function getPosition() {
      try {
        const { data } = await api.get('/forecast.json', {
          params: {
            q: `${position.lat},${position.lng}`,
            units: 'metric',
            days: 3,
          },
        })

        dispatch(setLocation(data))
      } catch (error) {
        toast.show({
          title: 'Erro ao buscar localização. Tente novamente.',
          placement: 'top',
          bgColor: 'red.500',
        })
      }
    }

    getPosition()
  }, [dispatch, position])

  useEffect(() => {
    Geolocation.requestAuthorization(() => {
      Geolocation.getCurrentPosition((position) => {
        dispatch(
          addPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        )
      })
    })
  }, [dispatch])

  return (
    <VStack flex={1} px={8}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
          opacity: activeSearch ? 0.1 : 1,
        }}
      >
        <CurrentWeather />

        <WeatherWidget />

        <ForecastNextDays />
      </ScrollView>
    </VStack>
  )
}
