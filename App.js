import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import LoginSceen from "./LoginSceen";

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               names: [
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
                    "Ama",
                    "Kofi",
                    "Manso",
                    "Adwoa",
                    "Esi",
                    "James",
                    "Halimatu",
                    "Ato",
                    "Joseph",
                    "Tchum",
                    "Charles",
                    "Sammy",
                    "Asuming",
               ],
          };
     }

     render() {
          return (
               <View style={styles.container}>
                    <LoginSceen />
               </View>
          );
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "whitesmoke",
     },
});

export default App;
