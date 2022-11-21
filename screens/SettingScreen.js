import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React, {useState} from 'react';
import { SafeAreaView, TextInput } from "react-native";
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import warningIcon from '../assets/warningIcon.png';
import {firebase } from '../config';
import { TouchableOpacity } from '@gorhom/bottom-sheet';


function SettingScreen(props) {

    const [range,setRange] = useState(0)
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);


    const todoRef = firebase.firestore().collection('newData')
    const [addData, setAddData]=useState('');

    const addField = () => {
      if (addData && addData.length >0){
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          heading: addData,
          createdAt: timestamp
        };
        todoRef
          .add(data)
          .then(()=>{
            setAddData('');
            Keyboard.dismiss();

          })
          .catch((error)=>{
            alert(error);
          })
  
      }
    }

    return (
        <View style = {styles.container}>
            {/* <Text style = {styles.title}>Account</Text>
            <Text style = {styles.overview_text}>Email</Text>
            <SafeAreaView> */}
                {/* <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder="Add some text"
                    placeholderTextColor='#aaaaaa'
                    // keyboardType="numeric"
                    onChangeText = {(heading) => setAddData(heading)}
                    value = {addData}
                    multiline ={true}
                    underlineColorAndroid = 'transparent'
                    autoCapitalize='none'
                />
                <TouchableOpacity style = {styles.button} onPress={addField}>
                    <Text style = {styles.buttonText}>Add</Text>
                </TouchableOpacity>
            {/* </SafeAreaView>
            <Text style = {styles.overview_text}>Password</Text> */}
        </View> 
            
        
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius:5,
        overflow:'hidden',
        backgroundColor:'white',
        paddingLeft: 16,
        flex:1,
        marginRight:5
    },
    button: {
        height: 47,
        borderRadius:5,
        backgroundColor:'#788eec',
        width:80,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color: 'white',
        fonSize:20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        left: 20,
        alignSelf: 'left',
        paddingBottom: 5
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center'
    },
    circle:{
        width: 150,
        height: 150,
        paddingTop:20,
        paddingBottom:30,
        borderRadius: 150 / 2,
        backgroundColor: '#A0D995',
        justifyContent: 'center',
        alignItems:'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    square:{
        width: 50,
        height: 30,
        borderRadius: 20 / 8,
        backgroundColor: '#A0D995',
        justifyContent: 'center'
    },
    overview_text: {
        paddingTop: 10,
        paddingBottom:10,
        color:"grey",
        alignItems:'left',
        paddingLeft: 20,
        alignSelf: 'left',
    },
    box_textTitle: {
        paddingTop: 10,
        paddingBottom:10,
        color:"grey",
        alignItems:'left',
        alignSelf: 'left',
    },
    dollar_text:{
        fontSize:15,
        color:'white',
        textAlign:'center'
    },
    slider_style:{
        width:300,
        height:50, 
        color:"#C2D76E",
        paddingTop: 10
    },
    score:{
        fontSize:35,
        color:'white',
        textAlign: 'center',
        alignItems:'center'
    }
 
})

export default SettingScreen;