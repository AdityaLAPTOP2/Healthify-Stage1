import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

// import SantaAnimation from '../components/SantaClaus.js';
import db from "../config";
import firebase from "firebase";

export default class BmiScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId:firebase.auth().currentUser.email,
      weight: 0,
      height: 0,
      bmi: 0,
    };
  }
calculateBmi=(weight,height)=>{
var bmi=weight/(height*height);
this.setState({bmi:bmi});
db.collection("bmi").add({
  "user_id":this.state.userId,
  "weight":this.state.weight,
  "height":this.state.height,
  "bmi":this.state.bmi,
})
}

  render() {
    return (
      <View>
        <Text>Calculate BMI</Text>

        <Text>Enter your weight in kg</Text>
        <TextInput
          placeholder="Weight"
          keyboardType="number"
          onChangeText={(text) => {
            this.setState({ weight: text });
          }}
        ></TextInput>

        <Text>Enter your height in mt</Text>
        <TextInput
          placeholder="Height"
          keyboardType="number"
          onChangeText={(text) => {
            this.setState({ height: text });
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={()=>{this.calculateBmi(this.state.weight, this.state.height)
        }}
        >
          <Text>Calculate BMI</Text>
        </TouchableOpacity>

      <Text>{this.state.bmi}</Text>
      </View>
    );
  }
}
