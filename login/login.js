import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./loginstyles";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleFormvaluechange = (inputname, text) => {
    try {
      setFormValues({
        ...formValues,
        [inputname]: text,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const { navigate } = useNavigation();

  const handleSignuppage = () => {
    navigate("signup");
  };


  const handleSubmit = async () => {
    const data = formValues;
    const existingData = await AsyncStorage.getItem("myData");
    const parsedData = JSON.parse(existingData);
    console.log(parsedData);
    if (parsedData === null) {
      navigate("signup");
      return;
    }
    const value = parsedData.find((x) => x.email === data.email);

    if (!value) {
      console.log("User not found");
      return;
    }

    if (value) {
      const check = value.password === data.password;
      check ? navigate("UserData") : ("Password incorrect");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.page_title}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          name="email"
          onChangeText={(text) => handleFormvaluechange("email", text)}

        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          name="password"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => handleFormvaluechange("password", text)}
          
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText} onPress={handleSubmit}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account?
          <Text style={styles.innerText} onPress={handleSignuppage}>
            SignUp
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
