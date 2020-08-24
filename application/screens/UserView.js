import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Formik } from "formik";

function UserView({ navigation }) {
  const identidad = navigation.getParam("identidad", "no identidad");
  const nombre = navigation.getParam("nombre", "no identidad");

  return (
    <View>
      <Modal visible={false}>
        <Text>Sex duro por ahora</Text>
      </Modal>

      <View style={styles.container0}>
        <Text style={styles.textoUser}>
          {nombre}
          {"\n"} {identidad}
          {"\n"}
        </Text>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linestyle}>
        {" "}
        __________________________________{"\n"}
      </Text>
      <View style={styles.container1}>
        <Text style={styles.textoUser2}>Ingresar Reporte{"\n"}</Text>
        <TextInput style={styles.inputTexto} multiline />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container0: {
    height: "45%",
    width: "100%",
    backgroundColor: "#4EFF85",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: "relative",
  },

  container1: {
    height: "35%",
    backgroundColor: "#e2ddd0",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 20,
  },
  image: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  linestyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textoUser2: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  textoUser: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  inputTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "90%",
    height: "60%",
    margin: 20,
    fontSize: 15,
    textAlign: "center",
  },
});

export default UserView;
