import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

// import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class DetailsScreen extends Component {
constructor(){
    super()
    this.state={
        userId:firebase.auth().currentUser.email,
        firstName:'',
        lastName:'',
        contact:'',
    };
}
getDetails=()=>{
    db.collection("users").where("email_id","==",this.state.userId).get()
    .then((snapshot)=>{
        snapshot.forEach((doc) => {
          this.setState({
            firstName  :doc.data().first_name ,
            lastName:doc.data().last_name ,
            contact:doc.data().contact
          })
        })
      })
}
componentDidMount () {
    this.getDetails()
}
    render(){
        return (
            <View>
                <Text>WELCOME</Text>
                <Text>First Name:</Text>
                <Text> {this.state.firstName}</Text>
                <Text>Last Name:</Text>
                <Text> {this.state.lastName}</Text>
                <Text>Contact:</Text>
                <Text> {this.state.contact}</Text>
                <Text>Email Id:</Text>
                <Text> {this.state.userId}</Text>
               
            </View>
        )
    }
}