import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

function RestoreScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/monumentoInicio.jpg")}
        style={styles.fondoImagen}
      >
        <View style={styles.contenedor}>
          <Text style={styles.tituloTexto}>Recuperación de {"\n"}cuenta</Text>
          <Text style={styles.tituloTexto}>________________</Text>
          <View>
            <Text style={styles.indicesTexto}>Correo electrónico</Text>
            <TextInput style={styles.textoEntrada} />
            <Text style={styles.indicesTexto}>Confirmar correo</Text>
            <TextInput style={styles.textoEntrada} />
            <TouchableOpacity style={styles.botonConfirmar}>
              <Text style={styles.textoBotonConfirmar}>E N V I A R</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center",
    alignItems: "center",
  },
  fondoImagen: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  tituloTexto: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  indicesTexto: {
    color: "#fff",
    fontSize: 25,
    textAlign: "left",
    margin: 5,
  },
  textoEntrada: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 280,
    height: 60,
    margin: 5,
    fontSize: 20,
    textAlign: "center",
  },
  botonConfirmar: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 20,
    width: 250,
    height: 70,
    justifyContent: "center",
  },
  textoBotonConfirmar: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
});

export default RestoreScreen;
