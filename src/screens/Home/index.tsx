import dayjs from 'dayjs'
import { TouchableOpacity } from 'react-native'
import { HStack, Text, VStack, SimpleGrid, FlatList, Box } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'

import { Header } from '@components/Header'

export function Home() {
  return (
    <VStack flex={1} px={8}>
      <Header />

      <Box opacity={1}>
        <VStack mt={12} alignItems="center" justifyContent="center">
          <Text fontSize="96px" color="black" fontFamily="heading">
            32°
          </Text>
          <Text fontSize="sm" color="subtitle" mt={-6}>
            Ensolarado
          </Text>
        </VStack>

        <VStack mt={12} alignItems="center" justifyContent="center">
          <SimpleGrid columns={2} space={4}>
            <HStack
              p={6}
              space={4}
              rounded="md"
              alignItems="center"
              justifyContent="center"
              borderWidth={1}
              borderColor="gray.100"
              maxWidth="150px"
            >
              <Feather name="wind" size={24} color="#2E3034" />

              <VStack alignItems="flex-start">
                <Text fontSize="sm" color="subtitle">
                  Vento
                </Text>
                <Text fontSize="sm" color="title" fontFamily="heading">
                  10 km/h
                </Text>
              </VStack>
            </HStack>

            <HStack
              p={6}
              space={4}
              rounded="md"
              alignItems="center"
              justifyContent="center"
              borderWidth={1}
              borderColor="gray.100"
              maxWidth="150px"
            >
              <Feather name="sun" size={24} color="#2E3034" />

              <VStack alignItems="flex-start">
                <Text fontSize="sm" color="subtitle">
                  Index UV
                </Text>
                <Text fontSize="sm" color="title" fontFamily="heading">
                  0
                </Text>
              </VStack>
            </HStack>

            <HStack
              p={6}
              space={4}
              rounded="md"
              alignItems="center"
              justifyContent="center"
              borderWidth={1}
              borderColor="gray.100"
              maxWidth="150px"
            >
              <Feather name="eye" size={24} color="#2E3034" />

              <VStack alignItems="flex-start">
                <Text fontSize="sm" color="subtitle">
                  Visibilidade
                </Text>
                <Text fontSize="sm" color="title" fontFamily="heading">
                  4.5 km
                </Text>
              </VStack>
            </HStack>

            <HStack
              p={6}
              space={4}
              rounded="md"
              alignItems="center"
              justifyContent="center"
              borderWidth={1}
              borderColor="gray.100"
              maxWidth="150px"
            >
              <Feather name="droplet" size={24} color="#2E3034" />

              <VStack alignItems="flex-start">
                <Text fontSize="sm" color="subtitle">
                  Humidade
                </Text>
                <Text fontSize="sm" color="title" fontFamily="heading">
                  89%
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </VStack>

        <VStack mt={8} alignItems="flex-start">
          <Text fontSize="md" color="title">
            Próximos 7 dias
          </Text>

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item) => String(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                <VStack
                  py={4}
                  px={3}
                  mr={2}
                  space={4}
                  rounded="md"
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="gray.100"
                >
                  <Text fontSize="xs" color="subtitle">
                    {dayjs(new Date())
                      .add(index + 1, 'day')
                      .format('DD/MM')}
                  </Text>

                  <Text fontSize="lg" color="title" fontFamily="heading">
                    32°
                  </Text>
                </VStack>
              </TouchableOpacity>
            )}
          />
        </VStack>
      </Box>
    </VStack>
  )
}
