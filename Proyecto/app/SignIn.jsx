// Importaciones de React Native
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

// Componentes 
import StyledTextInput from "../components/Ui/Inputs/StyledTextInput";
import StyledPrimaryButton from "../components/Ui/Buttons/StyledPrimaryButton";

// SignIn: Pantalla de inicio de sesión de la aplicación I Learn Nica
export default function SignIn({ navigation }) {
  return (
    <View style={style.container}>
      <View>
        <Image source={require('../assets/images/Logo.png')} />
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={style.title}>¡Bienvenidos nuevamente!</Text>
        <Text style={style.subtitle}>¡Introduce tus credenciales!</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          const { email, password } = values;

          // Verificar si el usuario es "admin"
          if (email === "Admin@gmail.com" && password === "1234") {
            navigation.navigate("Administracion");  // Redirigir a la pantalla de Admin
          } else if (email === "Denisse@gmail.com" && password === "1234") {
            navigation.navigate("Estudiante");  // Redirigir a la pantalla de Admin
          } else if (email === "Irene@gmail.com" && password === "1234") {
            navigation.navigate("Docente");  // Redirigir a la pantalla de Admin
          }

          else {
            Alert.alert("Credenciales incorrectas", "Este usuario no se encuentra disponible");
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <View style={{ width: "100%" }}>
              <StyledTextInput
                placeholder="Example@gmail.com"
                name="Correo electrónico"
                value={values.email}
                handleOnchange={handleChange("email")}
              />
              <StyledTextInput
                placeholder="Contraseña"
                name="Contraseña"
                password
                value={values.password}
                handleOnchange={handleChange("password")}
              />
            </View>
            <StyledPrimaryButton text="Iniciar sesión" handleOnPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "regular",
    fontFamily: "Roboto",
  },
});
