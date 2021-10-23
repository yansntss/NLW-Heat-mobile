import React from "react";
import { Image } from "react-native";

import avatarImg from '../../assets/avatar.png'
import { styles } from "./styles";

const SIZES = {
  SMALL: { container: 32, avatarSize: 28 },
};
const NORMAL = {
  SMALL: { container: 48, avatarSize: 42 },
};

type Props = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = "NORMAL" }: Props) {
  return <Image source={{ uri: imageUri || AVATAR_DEFAULT }} style={styles.avatar} />;
}
