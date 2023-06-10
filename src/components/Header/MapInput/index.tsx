import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Center, HStack, Image, VStack } from 'native-base'
import {
  GooglePlacesAutocomplete,
  Point,
} from 'react-native-google-places-autocomplete'
import Feather from 'react-native-vector-icons/Feather'

import { useSearch, toggleActiveSearch } from '@store/slices/activeSearch'
import { addPosition } from '@store/slices/position'

import mapImg from '@assets/map.png'

export function MapInput() {
  const dispatch = useDispatch()

  const { activeSearch } = useSelector(useSearch)

  function handleSearch(location: Point) {
    dispatch(addPosition(location))
    dispatch(toggleActiveSearch())
  }

  return (
    <VStack
      w="full"
      h={12}
      mb={4}
      alignItems={activeSearch ? null : 'flex-end'}
    >
      {activeSearch ? (
        <HStack alignItems="flex-start" justifyContent="space-between">
          <GooglePlacesAutocomplete
            placeholder="Pesquisar cidade"
            fetchDetails
            GooglePlacesDetailsQuery={{ fields: 'geometry' }}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyChJ2uQkfnDecnHNoYNR2QYXYMozrVya9E',
              language: 'pt-BR',
              type: '(cities)',
            }}
            onPress={(_, details) =>
              details?.geometry && handleSearch(details?.geometry.location)
            }
            styles={{
              container: styles.container,
              textInput: styles.input,
              row: {
                backgroundColor: 'black',
                zIndex: 1,
              },
              description: {
                color: '#fff',
              },
            }}
          />

          <TouchableOpacity onPress={() => dispatch(toggleActiveSearch())}>
            <Center
              borderWidth={1}
              borderColor="gray.300"
              h={10}
              w={10}
              mt="1.3px"
              rounded="md"
            >
              <Feather name="x" size={18} color="#d4d4d8" />
            </Center>
          </TouchableOpacity>
        </HStack>
      ) : (
        <TouchableOpacity onPress={() => dispatch(toggleActiveSearch())}>
          <Image source={mapImg} alt="Mapa" w={8} h={8} />
        </TouchableOpacity>
      )}
    </VStack>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '85%',
  },

  input: {
    height: 40,
    top: 1.5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d4d4d8',
  },
})
