import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
  
   
  
    hometext: {
      color: "black",
      fontSize:20,
      marginTop:20,
      fontWeight:'bold',
      
    },
    loginBtn: {
      width: "83%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
      marginLeft: 32,
    },
    signupBtn: {
      width: "83%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "black",
      marginLeft: 32,
    },
    loginText: {
      color: "white",
    },
  });

  export default styles;