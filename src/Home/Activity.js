import React from "react"
import { View, TouchableOpacity, Linking } from "react-native"
import {
  LargeText,
  ViewContainer,
  Paragraph,
  EyebrowText,
  Button,
} from "../components"

export const Activity = ({
  item,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <ViewContainer>
      <Paragraph>
        <EyebrowText>Try this</EyebrowText>
        <LargeText style={{ fontSize: 30 }}>{item.activity}</LargeText>
      </Paragraph>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Paragraph>
          <EyebrowText>Activity type</EyebrowText>
          <LargeText>{item.type}</LargeText>
        </Paragraph>
        <Paragraph style={{ paddingRight: 40 }}>
          <EyebrowText>Participants</EyebrowText>
          <LargeText>{item.participants}</LargeText>
        </Paragraph>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Paragraph>
          <EyebrowText>Price</EyebrowText>
          <LargeText>{item.price}</LargeText>
        </Paragraph>
        <Paragraph style={{ paddingRight: 40 }}>
          <EyebrowText>Accessibility</EyebrowText>
          <LargeText>{item.accessibility}</LargeText>
        </Paragraph>
      </View>
      {!item.link ? null : (
        <Paragraph>
          <EyebrowText>Link</EyebrowText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Linking.openURL(item.link)}>
            <LargeText>{item.link}</LargeText>
          </TouchableOpacity>
        </Paragraph>
      )}
      <View style={{ marginTop: 30 }}>
        {isFavorite ? (
          <Button title='Remove from favorites' onPress={removeFromFavorites} />
        ) : (
          <Button title='Add to favorites' onPress={addToFavorites} />
        )}
      </View>
    </ViewContainer>
  )
}
