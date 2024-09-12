import { StyleSheet, View } from "react-native";
import AuthNavigator from "./navigations/AuthNavigator";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <AuthNavigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});