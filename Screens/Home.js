import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="pagina"
        onPress={() => navigation.navigate("Pagina", { name: "parametro" })}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
