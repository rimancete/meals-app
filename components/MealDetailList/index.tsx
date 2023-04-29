import { StyleSheet, Text, TextProps, View } from "react-native";

import theme from "styles/theme";

interface MealDetailListProps extends TextProps {
  data: string[];
}

function MealDetailList({ data }: MealDetailListProps) {
  return (
    <View>
      {data.map((value) => (
        <View  style={styles.listItem}>
          <Text style={styles.itemText} key={value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: theme().colors.secondary.light
    },
    itemText: {
        color: theme().colors.secondary.dark,
        textAlign: 'center'
    }
});

export default MealDetailList;
