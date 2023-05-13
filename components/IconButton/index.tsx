import {
  GestureResponderEvent,
  OpaqueColorValue,
  Pressable,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  icon?: keyof typeof MaterialIcons.glyphMap;
  color?: string | OpaqueColorValue | undefined;
}

function IconButton({
  icon = "star-outline",
  color = "white",
  onPress,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <MaterialIcons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
