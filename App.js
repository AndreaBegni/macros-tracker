import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Screens/Dashboard";
import Pagina from "./Screens/Pagina";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Ingredienti" component={Pagina} initialParams={{ name: "parameter" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
