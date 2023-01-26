import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Pagina from "./Screens/Pagina";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
        <Stack.Screen name="Pagina" component={Pagina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
