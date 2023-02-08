import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Box, Button, Chip, HStack } from "@react-native-material/core";
import { VictoryLabel, VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { tints } from "../Styles/colors";

const Home = ({ navigation }) => {
  const graphData = [
    { y: 100, type: "carbs" },
    { y: 50, type: "proteins" },
    { y: 20, type: "fats" },
  ];

  const graphLabelText = "1000 Kcal";

  return (
    <View style={styles.container}>
      <Box w={360} h={355} m={4} style={{ backgroundColor: tints[6], borderRadius: 20 }}>
        <Svg height={320} width={360} style={{ marginTop: -35 }}>
          <VictoryPie
            standalone={false}
            width={360}
            height={360}
            data={graphData}
            innerRadius={80}
            padAngle={4}
            style={{
              labels: { display: "none" },
              data: {
                fill: ({ datum }) => tints[datum.type],
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
        <HStack style={{ marginTop: 10, justifyContent: "space-evenly" }}>
          <Chip
            label={"100g carbs"}
            labelStyle={{ fontSize: 15, fontWeight: "bold" }}
            style={{ backgroundColor: tints.carbs }}
          />
          <Chip
            label={"50g proteins"}
            labelStyle={{ fontSize: 15, fontWeight: "bold" }}
            style={{ backgroundColor: tints.proteins }}
          />
          <Chip
            label={"20g fats"}
            labelStyle={{ fontSize: 15, fontWeight: "bold" }}
            style={{ backgroundColor: tints.fats }}
          />
        </HStack>
      </Box>
      <Button title="pagina" onPress={() => navigation.navigate("Pagina", { name: "parametro" })} />

      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tints[8],
    alignItems: "center",
  },
});
