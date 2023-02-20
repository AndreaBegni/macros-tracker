import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Screens/Dashboard";
import IngridientsPage from "./Screens/IngridientsPage";

const Tab = createBottomTabNavigator();

const ingridientsButton = (setModalVisible) => {
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={{
        marginRight: 10,
        padding: 20,
        borderRadius: 100,
        backgroundColor: "orange",
      }}
    />
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen
          name="Ingridients"
          children={() => <IngridientsPage modalVisible={modalVisible} setModalVisible={setModalVisible} />}
          options={() => ({
            headerRight: () => ingridientsButton(setModalVisible),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
