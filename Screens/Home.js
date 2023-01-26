import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Box, Button } from "@react-native-material/core";
import { VictoryLabel, VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import colors from "../Styles/colors";

const Home = ({ navigation }) => {
  const graphData = [
    { y: 20, fill: "tomato" },
    { y: 20, fill: "green" },
    { y: 10, fill: "yellow" },
  ];

  const graphLabelText = "1000 Kcal";

  return (
    <View style={styles.container}>
      <Box
        w={360}
        h={500}
        m={4}
        style={{ backgroundColor: colors[6], borderRadius: 20 }}
      >
        <Svg height={360} width={360}>
          <VictoryPie
            standalone={false}
            width={360}
            height={360}
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
            style={{ fontSize: 30, fontWeight: "bold", fill: "white" }}
            x={180}
            y={180}
            text={graphLabelText}
          />
        </Svg>
      </Box>
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
    backgroundColor: colors[8],
    alignItems: "center",
  },
});
