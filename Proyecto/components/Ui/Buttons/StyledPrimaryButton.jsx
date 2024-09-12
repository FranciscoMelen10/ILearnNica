import { TouchableHighlight, View, StyleSheet, Text } from "react-native";

export default function StyledPrimaryButton({ text, handleOnPress, icon }) {
  return (
    <TouchableHighlight onPress={handleOnPress} style={styles.parent}>
      <View style={styles.container}>
        {icon && <View>{icon}</View>}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderRadius: 13,
    width: "100%", // Añadido para asegurarte de que ocupe todo el ancho
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",    
    alignItems: "center",
    backgroundColor: "#4EB1D7",
    borderRadius: 13,
    height: 50,
    gap: 10,
    paddingHorizontal: 16, // Asegura que el texto tenga algo de espacio interno
  },
  text: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Centra el texto horizontalmente
  },
});
