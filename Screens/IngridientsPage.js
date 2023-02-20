import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getData } from "../utils/storage";
import IngridientModal from "../Modals/IngridientModal";

const IngridientsPage = ({ modalVisible, setModalVisible }) => {
  const isFocused = useIsFocused();
  const [ingridients, setIngridients] = useState([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const ingridients = await getData("ingridients");
      setIngridients(ingridients);
    };
    getDataFromStorage();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <IngridientModal show={modalVisible} close={() => setModalVisible(false)} />
      <StatusBar style="auto" />
    </View>
  );
};

export default IngridientsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
