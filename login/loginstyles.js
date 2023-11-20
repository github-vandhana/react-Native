import {
    StyleSheet,
    
  } from "react-native";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    title: {
      alignItems: "center",
    },
    page_title: {
      marginVertical: 50,
      fontSize: 30,
      fontWeight: "bold",
    },
  
    inputView: {
      borderWidth: 1,
      borderColor: "thistle",
      borderRadius: 5,
      width: "80%",
      height: 45,
      marginBottom: 30,
      marginHorizontal: 30,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 11,
      marginRight: 30,
      fontSize: 20,
    },
    forgot_button: {
      fontSize: 15,
      textAlign: "right",
      marginRight: 45,
      fontWeight: "bold",
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
      marginLeft: 31,
    },
    loginText: {
      color: "white",
      fontSize: 15,
    },
    innerText: {
      color: "blue",
      fontSize: 17,
      fontWeight: "bold",
      marginLeft:20,
    },
    signupText: {
      textAlign: "left",
      alignItems: "flex-end",
      marginTop: 30,
      fontSize: 17,
      marginLeft: 44,
      marginHorizontal: 30,
      fontWeight: "bold",
    },
    signUpBtn: {
      width: "83%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "black",
      marginLeft: 32,
    },
  });
  export default styles;