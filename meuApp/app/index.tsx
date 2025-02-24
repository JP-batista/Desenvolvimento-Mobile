import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Modal, TextInput, PanResponder } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const translateX = useState(new Animated.Value(-300))[0]; // Valor inicial fora da tela

  const openSidebar = () => {
    setModalVisible(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(translateX, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  // Configuração do PanResponder
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return gestureState.dx > 20; // Inicia o gesto de arrastar para a direita
    },
    onPanResponderMove: (_, gestureState) => {
      // Atualiza a posição da sidebar com base no arrasto
      translateX.setValue(gestureState.dx > 0 ? gestureState.dx - 300 : gestureState.dx);
    },
    onPanResponderRelease: (_, gestureState) => {
      // Determina se a sidebar deve ser fechada ou aberta com base no movimento
      if (gestureState.dx > 100) {
        openSidebar();
      } else {
        closeSidebar();
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={openSidebar}>
            <Ionicons name="reorder-two-outline" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>ChatGPT 4o</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical-outline" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

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

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <TouchableOpacity style={styles.modalOverlay} onPress={closeSidebar}>
          <View style={styles.modalContainer} {...panResponder.panHandlers}>
            <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
              <Text style={styles.sidebarTitle}>Menu</Text>

              {/* Barra de Pesquisa */}
              <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} color="white" />
                <TextInput 
                  placeholder="Buscar dentro"
                  placeholderTextColor="#999"
                  style={styles.searchInput}
                />
              </View>

              {/* Links do Menu */}
              <Link href="/home" asChild>
                <TouchableOpacity style={styles.sidebarButton} onPress={closeSidebar}>
                  <Ionicons name="chatbubble-outline" size={28} color="white" />
                  <Text style={styles.sidebarButtonText}>ChatGPT</Text>
                </TouchableOpacity>
              </Link>

              {/* Perfil na parte inferior */}
              <Link href="/configuracoes" asChild>
                <TouchableOpacity style={styles.profileContainer} onPress={closeSidebar}>
                  <View style={styles.profileImageContainer}>
                    <Ionicons name="person-circle-outline" size={50} color="white" />
                  </View>
                  <View>
                    <Text style={styles.profileName}>João Silva</Text>
                    <Text style={styles.profileEmail}>joao@email.com</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
}

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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  sidebar: {
    width: 250,
    height: '100%',
    backgroundColor: '#222',
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  sidebarTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sidebarButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20, // Espaçamento abaixo da barra de pesquisa
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#bbb',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }  
});
