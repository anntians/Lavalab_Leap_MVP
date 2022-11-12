import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React, {useState} from 'react';
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function ProfileScreen(props) {

    const [range,setRange] = useState(0)


    return (
        <NativeBaseProvider>
          <View style = {styles.container}>
              <Text style = {styles.title}>Adjust Tommy's Credit Limit</Text>
              <Text style={{fontSize:15, fontWeight:"bold", paddingTop:10}}>${Math.floor(range*300)}</Text>
              <Slider
                style={{width:300,height:50, color:"#C2D76E"}}
                onValueChange = {(value)=>setRange(value)}
                minimumValue = {0}
                maximumValue = {1}
                thumbTintColor = 'white'
                maximumTrackTintColor='#A0D99530'
                minimumTrackTintColor='#A0D995'
                outli
              />
          </View>
            
        </NativeBaseProvider>

        
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'grey',
        alignItems: 'left'

    },
    card_image:{
        width: '100%',
        height: '35%',
        // backgroundColor: "green",
        top: 20,
        bottom: 20
    },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    card_text: {
        left: '-40%',
        top: 5,
        color:"grey"
    },
    overview_text: {
        left: '-36%',
        top: 20,
        color:"grey"
    },
 
})

export default ProfileScreen;