import { useSelector } from 'react-redux'
import { SimpleGrid } from 'native-base'

import { useLocation } from '@store/slices/location'
import { Widget } from './Widget'

export function WeatherWidget() {
  const { current } = useSelector(useLocation)

  return (
    <SimpleGrid
      columns={2}
      space={4}
      mt={8}
      alignItems="center"
      justifyContent="center"
    >
      <Widget title="Vento" value={`${current.wind_kph} km/h`} icon="wind" />

      <Widget title="Index UV" value={`${current.uv}`} icon="sun" />

      <Widget title="Visibilidade" value={`${current.vis_km} km`} icon="eye" />

      <Widget title="Humidade" value={`${current.humidity}%`} icon="droplet" />
    </SimpleGrid>
  )
}
