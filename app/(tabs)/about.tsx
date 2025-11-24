import React from 'react'
import { Text, View, StyleSheet } from "react-native";
export default function about() {
  return (
   <View style={styles.container}>
       <Text style={styles.text}>这是about界面 </Text> 
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});