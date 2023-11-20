import { View, Text, ScrollView,StyleSheet,TouchableOpacity } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import styles from "./dashboardstyles";


const UserData = () => {
  const header = ["FirstName", "LastName", "Email", "Password", "confirmPassword"];
  const [data, setData] = useState([]);
  
  const {navigate} = useNavigation();

  const logout = () => {
    navigate('login');
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("myData");
      const parsedData = JSON.parse(value);
      
      if (Array.isArray(parsedData)) {
        const dataArray = parsedData.map(user => [
          user.firstName,
          user.lastName,
          user.email,
          user.password,
          user.confirmPassword,
        ]);

        setData(dataArray);
      } else {
        console.log("Data is not an array:", parsedData);
        setData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
    <TouchableOpacity style= {styles.button}  onPress={logout}>
        <Text style= {styles.logoutText} onPress={logout}>LOGOUT</Text>

     </TouchableOpacity> 
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 14, marginTop: 30, }}>Login data of users</Text>
        
        <Table borderStyle={{ borderWidth: 2, borderColor: "black" }}>
          <Row data={header} />
          <Rows data={data} />
        </Table>
      </View>
    </ScrollView>
  );
};

export default UserData;
