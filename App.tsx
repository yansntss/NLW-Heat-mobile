import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import { StatusBar } from "expo-status-bar";

import { Home } from "./src/screens/Home/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  //se as fontes nao foram carregada, o AppLoading vai segurar a tela de splesh ate carregar as fontes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <> 
    <StatusBar style='light' />
      <Home />
    </>
  );
}
