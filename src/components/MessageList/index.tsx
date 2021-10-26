import React from "react";
import { Message } from "../Message";

import { ScrollView } from "react-native";

import { styles } from "./styles";

export function MessageList() {
  const message = {
    id: "1",
    text: "messagem de teste",
    user: {
      name: "ana",
      avatar_url: "https://github.com/yansntss.png",
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      //toda vez que alguem tocar na lista, o teclado some
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
