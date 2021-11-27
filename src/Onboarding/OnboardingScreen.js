import React from "react"
import { TouchableOpacity } from "react-native"
import { ViewContainer, LargeText, Paragraph, Button } from "../components"

export const OnboardingScreen = ({ navigation }) => {
  return (
    <ViewContainer>
      <Paragraph>
        <LargeText
          style={{
            fontSize: 30,
            fontWeight: "700",
          }}>
          Feeling bored?
        </LargeText>
      </Paragraph>
      <Paragraph>
        <LargeText>Use one of our activities to get better.</LargeText>
      </Paragraph>
      <Paragraph>
        <LargeText>Filter activities by type.</LargeText>
      </Paragraph>
      <Paragraph style={{ paddingBottom: 50 }}>
        <LargeText>
          Save favorite activities and come use them anytime feeling bored
          again!
        </LargeText>
      </Paragraph>
      <Button
        title='Explore activities'
        onPress={() => navigation.push("Tabs")}
      />
    </ViewContainer>
  )
}
