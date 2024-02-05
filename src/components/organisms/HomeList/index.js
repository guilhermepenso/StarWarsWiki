import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'
import { ListContainer } from './styles'
import { theme } from '~/styles/theme'

export const HomeList = ({ data, title }) => {
  return (
    <ListContainer>
        <Text size={18} fontFamily="black" >{title}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
            paddingLeft: theme.metrics.px(24),
            paddingTop: theme.metrics.px(12),
            paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}
