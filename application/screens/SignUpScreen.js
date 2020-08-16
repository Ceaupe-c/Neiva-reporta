import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

function SignUpScreen(props) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/monumentoInicio.jpg")}
        style={styles.imagenFondo}
      >
        <View style={styles.vistaPrincipal}>
          <Text style={styles.textoTitulo}>Crear una cuenta {"\n"}nueva</Text>
          <Text style={styles.textoTitulo}>_______________</Text>

          <View>
            <Text style={styles.textoIndices}>Documento de identidad</Text>
            <TextInput style={styles.entradaTexto} />
            <Text style={styles.textoIndices}>Nombres</Text>
            <TextInput style={styles.entradaTexto} />
            <Text style={styles.textoIndices}>Correo electrónico</Text>
            <TextInput style={styles.entradaTexto} />
            <Text style={styles.textoIndices}>Contraseña</Text>
            <TextInput style={styles.entradaTexto} />
            <TouchableOpacity style={styles.botonRegistro}>
              <Text style={styles.textoRegistro}>R E G I S T R A R S E</Text>
            </TouchableOpacity>
            <TouchableNativeFeedback>
              <Text style={styles.textoFinal}>¿Ya tienes una cuenta?</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vistaPrincipal: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagenFondo: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  textoTitulo: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoIndices: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
  },
  entradaTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 280,
    height: 60,
    margin: 5,
    fontSize: 20,
    textAlign: "center",
  },
  textoRegistro: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  botonRegistro: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 20,
    width: 250,
    height: 70,
    justifyContent: "center",
  },
  textoFinal: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default SignUpScreen;
