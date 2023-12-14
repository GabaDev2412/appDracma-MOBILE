import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Certifique-se de instalar a biblioteca react-native-vector-icons
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const RecPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleRecPassword = () => {
    // Verifica se as senhas são iguais
    if (password === confPassword) {
      // Lógica para enviar e-mail de recuperação de senha
      console.log(`Solicitar recuperação de senha para: ${email}`);
      // Aqui você pode adicionar lógica para enviar um e-mail de recuperação
      setMensagemErro('');
    } else {
      alert('As senhas não coincidem. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#FFF"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Icon name="mail-outline" size={20} style={styles.icon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#FFF"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Icon name="lock-closed-outline" size={20} style={styles.icon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#FFF"
            secureTextEntry
            onChangeText={(text) => setConfPassword(text)}
            value={confPassword}
          />
          <Icon name="lock-closed-outline" size={20} style={styles.icon} />
        </View>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.Button} onPress={handleRecPassword}>
          <Text style={styles.buttonText}>Alterar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#020202",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFF",
  },
  inputContainer: {
    width: "80%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 10,
    marginTop: 50,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "#FFF",
  },
  icon: {
    marginLeft: 10,
    color: "#FFF",
  },
  areaBtn:{
    marginBottom: 300,
  },
  Button: {
    backgroundColor: "#FF3131",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  },
});

export default RecPassword;
