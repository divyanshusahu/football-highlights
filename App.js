import "react-native-gesture-handler";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import VideoPlayer from "./screens/VideoPlayer";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Highlight" component={VideoPlayer}></Stack.Screen>
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
};
