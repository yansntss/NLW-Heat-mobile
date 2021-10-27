import React from "react";
import {Button} from "../Button"
import { View } from "react-native";

import {useAuth} from '../../hooks/auth'

import { styles } from "./styles";
import { COLORS } from "../../theme";

export function SignInBox() {
  const {signIn} = useAuth()

  return (
  <View style={styles.container}>

    <Button 
      title="ENTRAR COM GITHUB"
      color={COLORS.BLACK_PRIMARY}
      backgroundColor={COLORS.YELLOW}
      icon='github'
      onPress={signIn}
      

    />
  </View>
    
    );
}
