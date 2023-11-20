import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./home/home";
import signup from "./signup/signup";

import login from "./login/login";
import UserData from "./dashboard/dashboardpage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
            

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={home} />

        <Stack.Screen name="signup" component={signup} />

        <Stack.Screen name="login" component={login} />
      <Stack.Screen name="UserData" component={UserData}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
