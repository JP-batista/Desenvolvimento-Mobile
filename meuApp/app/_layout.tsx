import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início", headerShown: false }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="configuracoes" options={{ title: "Configurações" }} />
    </Stack>
  );
}
