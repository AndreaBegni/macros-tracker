import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "@react-native-material/core";
import { VictoryLabel, VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";

const Home = ({ navigation }) => {
  const graphData = [
    { y: 20, fill: "tomato" },
    { y: 20, fill: "green" },
    { y: 10, fill: "yellow" },
  ];

  const graphLabelText = "1000 Kcal";

  return (
    <View style={styles.container}>
      <Button
        title="pagina"
        onPress={() => navigation.navigate("Pagina", { name: "parametro" })}
      />

      <Svg height={400} width={400}>
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          data={graphData}
          innerRadius={80}
          style={{
            labels: { display: "none" },
            data: {
              fill: ({ datum }) => datum.fill,
            },
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 30, fontWeight: "bold" }}
          x={200}
          y={200}
          text={graphLabelText}
        />
      </Svg>

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
