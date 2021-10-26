import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <UserPhoto imageUri="https://github.com/yansntss.png" />

      {/* qualquer coisa que tiver dentro de TouchableOpacity, torna-se clicavel*/}
    </View>
  );
}
