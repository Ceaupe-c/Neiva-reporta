import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

import { Formik } from "formik";

function UserView({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const identidad = navigation.getParam("identidad", "no identidad");
  const nombre = navigation.getParam("nombre", "no identidad");

  const [reports, setReport] = useState([{ content: "" }]);

  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.container1}>
          <View style={styles.iconcont}>
            <Image
              style={styles.iconstyle}
              source={require("../assets/rayo.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/la-carretera.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/grifo-de-agua.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/gas.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/camion-de-la-basura.png")}
            ></Image>
          </View>
          <TextInput style={styles.inputTexto} multiline />
          <View style={styles.iconcont}>
            <Image
              style={styles.iconstyle}
              source={require("../assets/camara.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/marcador-de-posicion.png")}
            ></Image>
            <Image
              style={styles.iconstyle}
              source={require("../assets/galeria.png")}
            ></Image>
            <TouchableOpacity
              style={styles.botonPublicar}
              onPress={() => {
                setModalOpen(false);
              }}
            >
              <Text style={styles.textoBtn}> PUBLICAR </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.container0}>
        <Text style={styles.textoUser}>
          {nombre}
          {"\n"} {identidad}
          {"\n"}
        </Text>
        <View style={styles.contstyle}>
          <Image
            style={styles.image}
            source={require("../assets/usuario.png")}
          ></Image>
          <Image
            style={styles.image}
            source={require("../assets/mas.png")}
          ></Image>
        </View>
      </View>
      <Text style={styles.linestyle}>
        {" "}
        __________________________________{"\n"}
      </Text>

      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}
        >
          <Text>Ingresar Reporte</Text>
        </TouchableOpacity>
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
    height: "60%",
    width: "100%",
    backgroundColor: "#4EFF85",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  container1: {
    height: 320,
    width: 350,
    backgroundColor: "#e2ddd0",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 20,
  },
  container3: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  iconcont: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    width: 260,
  },
  contstyle: {
    height: "10%",
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconstyle: {
    width: "15%",
    height: "100%",
  },
  image: {
    width: "25%",
    height: "100%",
  },
  botonPublicar: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#4EFF85",
    width: 110,
    height: 40,
    justifyContent: "space-around",
  },
  linestyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textoBtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
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
    height: "50%",
    margin: 20,
    fontSize: 15,
    textAlign: "center",
  },
});

export default UserView;
