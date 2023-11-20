import {
    StyleSheet,
    
  } from "react-native";
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    pagetitle: {
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginBottom: 40,
    },
    inputView: {
      borderWidth: 1,
      borderColor: "thistle",
      borderRadius: 5,
      width: "80%",
      height: 45,
      marginBottom: 20,
    },
    textInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 0,
      fontSize: 20,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
    signText: {
      color: "white",
      fontSize: 17,
    },
    signupText: {
      textAlign: "left",
      alignItems: "flex-end",
      marginTop: 30,
      fontSize: 18,
      fontWeight: "bold",
    },
    signupBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "black",
    },
  });

  export default styles;