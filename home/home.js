import { useNavigation } from "@react-navigation/native";
import React from "react";
import {  Text, View, TouchableOpacity} from "react-native";
import styles from "./homestyles";

const Home = ()=> {
  const {navigate} = useNavigation();

  const handleLogin = () => {
    navigate('login');

    
  };
  const handleSignup = () => {
    navigate('signup')
  }
  return (
    <View style={styles.container}>
        <Text style={styles.hometext}>WELCOME</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}  onPress={handleLogin}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn}  onPress={handleSignup}>

        <Text style={styles.loginText} onPress={handleSignup}>SignUp</Text>
        
      </TouchableOpacity>
      
           

    </View>
  );
};

export default Home;
