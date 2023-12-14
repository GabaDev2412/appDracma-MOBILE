// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const { id, nome, pontos } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DADOS DO ALUNO:</Text>
      <View style={styles.data}>
        <Text style={styles.text}>ID: {id}</Text>
        <Text style={styles.text}>Nome: {nome}</Text>
        <Text style={styles.text}>Pontos: {pontos}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020202',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
  },
  data: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },
});

export default HomeScreen;
