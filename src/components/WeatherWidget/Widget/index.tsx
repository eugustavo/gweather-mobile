import { Dimensions } from 'react-native'
import { HStack, Text, VStack } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'

interface WidgetProps {
  title: string
  value: string
  icon: string
}

// Padding 32px at Home Screen
// Space 32px at SimpleGrid (16px per widget)
// Padding 24px at Widget
const SUM_PADDING_AND_SPACE = 88
const NUMBER_OF_WIDGET_PER_ROW = 2

export function Widget({ title, value, icon }: WidgetProps) {
  const { width } = Dimensions.get('window')

  const WIDGET_WIDTH =
    (width - SUM_PADDING_AND_SPACE) / NUMBER_OF_WIDGET_PER_ROW

  return (
    <HStack
      p={6}
      space={4}
      rounded="md"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor="gray.200"
      width={`${WIDGET_WIDTH}px`}
      maxWidth={`${WIDGET_WIDTH}px`}
    >
      <Feather name={icon} size={24} color="#2E3034" />

      <VStack alignItems="flex-start">
        <Text fontSize="sm" color="subtitle">
          {title}
        </Text>
        <Text fontSize="sm" color="title" fontFamily="heading">
          {value}
        </Text>
      </VStack>
    </HStack>
  )
}
