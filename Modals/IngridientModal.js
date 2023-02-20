import React, { useRef } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { HStack } from "@react-native-material/core";
import { mergeObjectToArray } from "../utils/storage";

const IngridientModal = ({ show, close }) => {
  const nameRef = useRef("");
  const kcalRef = useRef("");
  const carbsRef = useRef("");
  const proteinsRef = useRef("");
  const fatsRef = useRef("");

  const saveIngridient = () => {
    mergeObjectToArray("ingridients", {
      name: nameRef.current.text,
      kcal: kcalRef.current.text,
      carbs: carbsRef.current.text,
      proteins: proteinsRef.current.text,
      fats: fatsRef.current.text,
    });
    close();
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        close();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 15 }}>INGRIDIENT</Text>
          <TextInput
            ref={nameRef}
            onChangeText={(text) => {
              nameRef.current.text = text;
            }}
            placeholder="name"
            style={{
              height: 30,
              width: 250,
              paddingLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
              borderBottomWidth: 1,
            }}
          />
          <HStack style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontWeight: "bold" }}>Kcal</Text>
            <TextInput
              ref={kcalRef}
              onChangeText={(text) => {
                kcalRef.current.text = text;
              }}
              placeholder="kcal"
              keyboardType="numeric"
              style={{
                height: 30,
                width: 70,
                marginLeft: 10,

                borderBottomWidth: 1,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            />
            <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Carbs</Text>
            <TextInput
              ref={carbsRef}
              onChangeText={(text) => {
                carbsRef.current.text = text;
              }}
              placeholder="carbs"
              keyboardType="numeric"
              style={{
                height: 30,
                width: 70,
                marginLeft: 10,
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            />
          </HStack>
          <HStack style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontWeight: "bold" }}>Proteins</Text>
            <TextInput
              ref={proteinsRef}
              onChangeText={(text) => {
                proteinsRef.current.text = text;
              }}
              placeholder="proteins"
              keyboardType="numeric"
              style={{
                height: 30,
                width: 70,
                marginLeft: 10,
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            />
            <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Fats</Text>
            <TextInput
              ref={fatsRef}
              onChangeText={(text) => {
                fatsRef.current.text = text;
              }}
              placeholder="fats"
              keyboardType="numeric"
              style={{
                height: 30,
                width: 70,
                marginLeft: 10,
                borderBottomWidth: 1,
                paddingLeft: 10,
                fontWeight: "bold",
              }}
            />
          </HStack>
          <View style={{ position: "absolute", bottom: 10, right: 20, flexDirection: "row" }}>
            <Pressable style={{ ...styles.button, marginRight: 10 }} onPress={() => close()}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <Pressable style={[styles.button]} onPress={() => saveIngridient()}>
              <Text style={styles.textStyle}>Salva</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "grey",
    opacity: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: "#F194FF",
    padding: 10,
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IngridientModal;
