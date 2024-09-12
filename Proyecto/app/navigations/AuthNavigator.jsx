// Librerías
import { createStackNavigator } from "@react-navigation/stack";

// Componentes
import SignIn from "../SignIn";
import Administracion from "../Administracion"; // Importa correctamente la pantalla
import Docente from "../Docente";
import Estudiante from "../Estudiante";

// Navegación
const Stack = createStackNavigator();

/**
 * 
 * @returns Navegación de la pantalla de inicio de sesión
 */

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
            <Stack.Screen name="Administracion" options={{ headerShown: false }} component={Administracion} />
            <Stack.Screen name="Docente" options={{ headerShown: false }} component={Docente} />
            <Stack.Screen name="Estudiante" options={{ headerShown: false }} component={Estudiante} />
        </Stack.Navigator>
    );
}
