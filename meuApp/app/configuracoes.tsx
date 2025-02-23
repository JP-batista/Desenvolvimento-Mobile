import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Configurações</Text>
      </View>

      <Text style={styles.question}>Configurações do aplicativo</Text>

      <View style={styles.buttonsContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="arrow-back-outline" size={28} color="white" />
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    position: 'absolute',
    top: 40,
  },
  title: {
    color: 'white',
    fontSize: 21.5,
    fontWeight: 'bold',
  },
  question: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});
