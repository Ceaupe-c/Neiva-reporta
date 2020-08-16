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

function LogInScreen(props) {
  return (
    <SafeAreaView style={styles.vistaPrincipal}>
      <ImageBackground
        source={require("../assets/monumentoInicio.jpg")}
        style={styles.image}
      >
        <View style={styles.vistaPrincipal}>
          <Text style={styles.textoTop}>Inicia sesión en tu {"\n"} cuenta</Text>
          <Text style={styles.textoTop}>___________________</Text>

          <View>
            <Text style={styles.textotitulos}> Correo Electrónico </Text>
            <TextInput style={styles.inputTexto} keyboardType="email-address" />
            <Text style={styles.textotitulos}> Contraseña</Text>
            <TextInput style={styles.inputTexto} />
            <TouchableOpacity style={styles.botonIniciar}>
              <Text style={styles.textoTop}>I N I C I A R</Text>
            </TouchableOpacity>
            <TouchableNativeFeedback>
              <Text style={styles.textoFoot}>¿Olvidaste tu contraseña?</Text>
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
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  textoTop: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
  },
  textotitulos: {
    color: "#fff",
    fontSize: 25,
    textAlign: "left",
  },
  inputTexto: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 270,
    height: 60,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  botonIniciar: {
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#99F98D",
    margin: 20,
    width: 250,
    height: 70,
    justifyContent: "center",
  },
  textoFoot: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  },
});

export default LogInScreen;
