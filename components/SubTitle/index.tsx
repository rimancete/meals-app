import { StyleSheet, Text, View } from "react-native";
import theme from "styles/theme";

interface SubtitleProps {
    title: string;
}

function SubtTitle({title}: SubtitleProps) {

    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: theme().colors.secondary.light,
        borderBottomWidth: 2,
      },
      subtitle: {
        color: theme().colors.secondary.light,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
    
})

export default SubtTitle;