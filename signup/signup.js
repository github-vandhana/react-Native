import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  View,
  Text, 
  TextInput,
  TouchableOpacity,
 
} from "react-native";
import styles from "./signupstyles";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { navigate } = useNavigation();

  const handleSignin = () => {
    navigate("login");
  };
  const handleSignupformvaluechange = (inputname, text) => {
    try {
      setFormValues({
        ...formValues,
        [inputname]: text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signupformhandleSubmit = async () => {
    try {
      const signupFormdata = formValues;

      if(!isEmailValid(signupFormdata.email)){
        console.log('InValid email');
        return;
      }
      const myData = [];

      const existingStorage = await AsyncStorage.getItem("myData");

      const parsedData = JSON.parse(existingStorage);
      if (parsedData !== null) {
        parsedData.push(signupFormdata);
        const jsonValue = JSON.stringify(parsedData);

        await AsyncStorage.setItem("myData", jsonValue);
        handleSignin();
        return;
      }
      myData.push(signupFormdata);
      const jsonValue = JSON.stringify(myData);
      await AsyncStorage.setItem("myData", jsonValue);
      handleSignin();
    } catch (error) {
      console.error(error);
    }
  };


  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.pagetitle}>Register</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          name="firstName"
          onChangeText={(text) =>
            handleSignupformvaluechange("firstName", text)
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="LastName"
          placeholderTextColor="#003f5c"
          name="lastName"
          onChangeText={(text) => handleSignupformvaluechange("lastName", text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          name="email"
          onChangeText={(text) => handleSignupformvaluechange("email", text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          name="password"
          onChangeText={(text) => handleSignupformvaluechange("password", text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="confirm password"
          placeholderTextColor="#003f5c"
          name="confirmPassword"
          secureTextEntry={true}
          onChangeText={(text) =>
            handleSignupformvaluechange("confirmPassword", text)
          }
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={signupformhandleSubmit}
      >
        <Text style={styles.signText} onPress={signupformhandleSubmit}>
          REGISTER
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Do you have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signText} onPress={handleSignin}>
          Signin
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default Signup;
