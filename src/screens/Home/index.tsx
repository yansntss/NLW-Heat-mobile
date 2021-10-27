import React from "react";
import { View } from 'react-native'
import { MessageList } from "../../components/MessageList"
import { SignInBox } from "../../components/SignInBox";
import {SendMessageForm} from '../../components/SendMessageForm'
import { Header } from "../../components/Header";

import {styles} from "./styles"
export function Home(){
  return(
   <View style={styles.container}>
     <Header />
     <MessageList />
     <SendMessageForm />
   </View>
  )
}