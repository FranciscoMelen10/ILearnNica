import { TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import Eye from "../../../assets/icons/Eyes/eyes.svg";
import EyeOff from "../../../assets/icons/Eyes/eyes-off.svg";

/**
 * 
 * @param {emailAddress} Correo electrónico del usuario
 * @param {phone} Número de teléfono del usuario
 * @param {password} Contraseña del usuario, se activara el icono de ojo para mostrar la contraseña 
 * @param {placeholder} Placeholder del input 
 * @param {name} Nombre del input
 * @param {value} Valor del input (Usar con Formik)
 * @param {handleOnchange} Función que se ejecutara al cambiar el valor del input (Usar con Formik)
 * @param {editable} Booleano que indica si el input es editable o no (default: true) 
 * @returns Input estilizado y personalizado para hacer validaciones con Formik
 */
export default function StyledTextInput({
  emailAddress,
  phone,
  password,
  placeholder,
  name,
  value,
  handleOnchange,
  editable = true
}) {
  if (
    (emailAddress && phone) ||
    (emailAddress && password) ||
    (phone && password)
  ) {
    throw new Error(
      "hey! in StyledTextInput Only one type of input is allowed"
    );
  }
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "column",
      padding: 10,
      gap: 5,
    },
    textInput: {
      maxWidth: 800,
      height: 48,
      borderRadius: 10,
      paddingLeft: 16,
      paddingRight: password ? 45 : 16,
      backgroundColor: "white",
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
    },
    icon: {
      position: "absolute",
      right: 20,
      bottom: 20,
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 16,
      fontWeight: "thin",
      fontFamily: "Roboto",
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <TextInput
        editable={editable}
        style={styles.textInput}
        secureTextEntry={password ? !showPassword : undefined}
        keyboardType={
          emailAddress ? "email-address" : phone ? "phone-pad" : "default"
        }
        placeholder={placeholder}
        value={value}
        onChangeText={handleOnchange}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
        {password && (
          <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
              <EyeOff stroke="#6A6A6A" styles={styles.icon} />
            ) : (
              <Eye stroke="#6A6A6A" styles={styles.icon} />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}