import React from "react";
import { Message } from "../Message";

import { ScrollView } from "react-native";

import { styles } from "./styles";

export function MessageList() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      //toda vez que alguem tocar na lista, o teclado some
      keyboardShouldPersistTaps="never" 
    >
      <Message />
      <Message />
      <Message />
    </ScrollView>
  );
}
