import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Configuracoes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Perfil */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={80} color="white" />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>João Silva</Text>
          <Text style={styles.profileEmail}>joao@email.com</Text>
        </View>
      </View>

      {/* Opções */}
      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="email" size={28} color="white" />
        <Text style={styles.optionText}>joao@email.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="phone" size={28} color="white" />
        <Text style={styles.optionText}>+55 11 98765-4321</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="info-outline" size={28} color="white" />
        <Text style={styles.optionText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, styles.logout]} onPress={() => router.replace("/")}>
        <MaterialIcons name="exit-to-app" size={28} color="red" />
        <Text style={[styles.optionText, styles.logoutText]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#bbb",
    fontSize: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#111",
    marginBottom: 10,
  },
  optionText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
  logout: {
    marginTop: 20,
    backgroundColor: "#222",
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});
