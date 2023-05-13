import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealModel from "models/meal";
import theme from "styles/theme";
import { MealDetailScreenNavigationHookProps } from "types";
import MealDetails from "components/MealDetails";

interface MealItemProps {
  meal: MealModel;
}
function MealItem({ meal }: MealItemProps) {
  const navigation = useNavigation<MealDetailScreenNavigationHookProps>();
  const mealDetailPressHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: meal.id,
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? theme().pressableIOSRiple.buttonPressed : null
        }
        onPress={mealDetailPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,

    //ios shadow
    ...theme().ioShadow,
  },
  // necessary for iOS shadow
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    margin: 8,
  },
});
