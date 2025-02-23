import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Como posso ajudar?</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="brush" size={28} color="green" />
          <Text style={styles.buttonText}>Criar imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="code" size={28} color="blue" />
          <Text style={styles.buttonText}>Programar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="article" size={28} color="orange" />
          <Text style={styles.buttonText}>Resumir texto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="more-horiz" size={28} color="white" />
          <Text style={styles.buttonText}>Mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={32} color="white" />
        </TouchableOpacity>
        <TextInput placeholder="Mensagem" placeholderTextColor="#999" style={styles.input} />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 40,
  },
  title: {
    color: 'white',
    fontSize: 21.5,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  question: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '120%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10, 
    borderRadius: 100,
    margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    width: '99%',
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
