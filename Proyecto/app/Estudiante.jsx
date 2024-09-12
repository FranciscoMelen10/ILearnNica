import { StyleSheet, Text, View } from "react-native";
import StyledPrimaryButton from "../components/Ui/Buttons/StyledPrimaryButton";

// Componente AdminScreen
export default function Estudiante({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido, Estudiante</Text>
            <Text style={styles.subtitle}>Aquí puedes ver tu asistencia de cada curso.</Text>

            {/* Botón para cerrar sesión */}
            <StyledPrimaryButton text="Regresar al SignIn" handleOnPress={() => {
                navigation.navigate("SignIn")
            }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 40,
        textAlign: 'center',
    },
});