import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Pagina = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Sono la pagina</Text>
      <Text>sono il parametro passato: {route.params.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Pagina;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
